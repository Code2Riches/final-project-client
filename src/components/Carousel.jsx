import React, { Component } from "react";
import { CarouselData } from "./CarouselData";
import { AiOutlineLeft, AiOutlineRight, AiFillAccountBook } from "react-icons/ai";
import Swipe from "react-easy-swipe";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
      paused: false,
    };
  }

  componentDidMount() {
    setInterval(() => {
      if (this.state.paused === false) {
        let newSlide =
          this.state.currentSlide === CarouselData.length - 1
            ? 0
            : this.state.currentSlide + 1;
        this.setState({ currentSlide: newSlide });
      }
    }, 3000);
  }

  // nextSlide = () => {
  //   let newSlide =
  //     this.state.currentSlide === CarouselData.length - 1
  //       ? 0
  //       : this.state.currentSlide + 1;
  //   this.setState({ currentSlide: newSlide });
  // };

  // prevSlide = () => {
  //   let newSlide =
  //     this.state.currentSlide === 0
  //       ? CarouselData.length - 1
  //       : this.state.currentSlide - 1;
  //   this.setState({ currentSlide: newSlide });
  // };

  setCurrentSlide = (index) => {
    this.setState({ currentSlide: index });
  };

  render() {
    return (
      <div className="mt-0 pb-20 ">
        <div className=" flex overflow-hidden relative justify-center rounded-xl">
          {/* <AiOutlineLeft
            onClick={this.prevSlide}
            className="absolute left-0 text-3xl inset-y-1/2 text-white cursor-pointer dark:text-gray-800"
          /> */}

          <Swipe onSwipeLeft={this.nextSlide} onSwipeRight={this.prevSlide}>
            {CarouselData.map((slide, index) => {
              return (
                <img
                  src={slide.image}
                  alt="This is a carousel slide"
                  key={index}
                  className={
                    index === this.state.currentSlide
                      ? "block h-[600px] object-cover w-[1000px]"
                      : "hidden"
                  }
                  onMouseEnter={() => {
                    this.setState({ paused: true });
                  }}
                  onMouseLeave={() => {
                    this.setState({ paused: false });
                  }}
                />
              );
            })}
          </Swipe>

          <div className="absolute w-full flex justify-center bottom-0">
            {CarouselData.map((element, index) => {
              return (
                <div
                  className={
                    index === this.state.currentSlide
                      ? "h-2 w-2 bg-gray-700  dark:bg-gray-200 rounded-full mx-2 mb-2 cursor-pointer"
                      : "h-2 w-2 bg-white dark:bg-gray-800 rounded-full mx-2 mb-2 cursor-pointer"
                  } 
                  key={index}
                  onClick={() => {
                    this.setCurrentSlide(index);
                  }}
                ></div>
              );
            })}
          </div>

          {/* <AiOutlineRight
            onClick={this.nextSlide}
            className="absolute right-0 text-3xl inset-y-1/2 text-white  dark:text-gray-800 cursor-pointer"
          /> */}
        </div>
      </div>
    );
  }
}

export default Carousel;