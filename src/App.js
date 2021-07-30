import { Component } from "react";
import { ToastContainer, toast } from "react-toastify";

import Searchbar from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import LoaderSpinner from "./components/Loader/Loader";
import Modal from "./components/Modal/Modal";
import Button from "./components/Button/Button";

import getFetch from "./services/API";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";

class App extends Component {
  state = {
    query: "",
    imagesList: [],
    page: 1,
    loading: false,
    openModal: false,
    largeImageURL: "",
    button: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.query;
    const nextQuery = this.state.query;
    if (prevQuery !== nextQuery) {
      this.getImagesList();
    }
    if (this.state.imagesList.length - prevState.imagesList.length === 12) {
      this.setState({ button: true });
    }
  }

  onSubmit = (query) =>
    this.setState({
      query: query,
      imagesList: [],
      page: 1,
      button: false,
      error: null,
    });

  getImagesList = () => {
    const { query, page } = this.state;
    this.setState({ loading: true });

    getFetch(query, page)
      .then((imagesList) => {
        if (imagesList.length === 0) {
          this.setState({ button: false });
          toast.error("No results. Try another query");
          return;
        } else if (imagesList.length <= 12) {
          this.setState({ button: false });
        }
        this.setState((prevState) => ({
          imagesList: [...prevState.imagesList, ...imagesList],
          page: prevState.page + 1,
        }));
      })
      .catch((error) => toast(error))
      .finally(() => {
        this.scrollPageDown();
        this.setState({ loading: false });
      });
  };

  scrollPageDown = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  toggleModal = () => {
    this.setState(({ openModal }) => ({
      openModal: !openModal,
    }));
  };

  modalImage = (largeImageURL) => {
    this.setState({ largeImageURL });
    this.toggleModal();
  };

  render() {
    const { imagesList, loading, openModal, largeImageURL, button, tags } =
      this.state;
    return (
      <div className="App">
        <ToastContainer autoClose={3000} />
        <Searchbar onSubmit={this.onSubmit} />
        {imagesList && (
          <ImageGallery imagesList={imagesList} modalImage={this.modalImage} />
        )}
        {loading && <LoaderSpinner />}
        {button && !loading && <Button onClick={this.getImagesList} />}
        {openModal && (
          <Modal onClose={this.toggleModal}>
            <img src={largeImageURL} alt={tags} />
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
