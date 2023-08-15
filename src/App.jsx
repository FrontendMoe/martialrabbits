import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-scroll'
import videoRec from './assets/img5.png'
import { GiHamburgerMenu } from 'react-icons/gi'
import { RxCross2 } from 'react-icons/rx'
import { BsInstagram, BsYoutube } from 'react-icons/bs'
import { FaDownload } from 'react-icons/fa'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import Logo from './assets/Logo.png'
import Card1 from './assets/img12.png'
import Card2 from './assets/playConquer.png'
import Card3 from './assets/img14.png'
import ReactLoading from 'react-loading'
import RoadmapLogo1 from './assets/img15.png'
import RoadmapLogo2 from './assets/Marketing.png'
import RoadmapLogo3 from './assets/img17.png'
import FooterPerson from './assets/rubbit.png'
import Slider from 'react-slick'
import Lightbox from 'react-image-lightbox'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'react-image-lightbox/style.css'
import aboutImage from './assets/img7.png'
import tokenAllocBg from './assets/img10.png'
import textBox from './assets/img8.png'
import textBoxRoadMap from './assets/img18.png'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import $ from 'jquery'
import vid from './assets/vid.mp4'
import x from './assets/Twitter X.svg'
// Import

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import { Marketing, hoverTeamBox, teamBox } from './assets/icons'
// Team Images
import Sako from './assets/Sako.png'
import Grano from './assets/Grano.png'
import Marko from './assets/Marko.png'
import Andre from './assets/Andre.png'

import { focusOnSection, scrollToTop } from './functions/functions'
const presaleStages = [
  {
    stage: 1,
    pricePerToken: 0,
    sellPrice: 0,
    maxTokens: 0,
  },
  {
    stage: 2,
    pricePerToken: 0,
    sellPrice: 0,
    maxTokens: 0,
  },
  {
    stage: 3,
    pricePerToken: 0,
    sellPrice: 0,
    maxTokens: 0,
  },
]
const photos = [
  require('./assets/MenuItemsCarousel/CarouselOne.png'),
  require('./assets/MenuItemsCarousel/CarouselTwo.png'),
  require('./assets/MenuItemsCarousel/CarouselThree.png'),
  require('./assets/MenuItemsCarousel/CarouselFour.png'),
]

const App = () => {
  const [currentStage, setCurrentStage] = useState(1)
  const [sellPrice, setSellPrice] = useState(presaleStages[0].sellPrice)
  const [pricePerToken, setPricePerToken] = useState(
    presaleStages[0].pricePerToken,
  )
  const [mobileNav, setMobileNav] = useState(false)
  // const [rangeVal, setRangeVal] = useState(0)
  const [maxTokens, setMaxTokens] = useState(presaleStages[0].maxTokens)
  const [soldTokens, setSoldTokens] = useState(0)
  const [usdtRaised, setUsdtRaised] = useState(0)
  const [connected, setConnected] = useState(false)
  // eslint-disable-next-line
  const [roadmap, setRoadMap] = useState([
    {
      name: 'Milestone 1 - Q3 2023',
      features: [
        {
          name: 'Website Launch',
          type: 'dev',
        },
        {
          name: 'Game Demo 1.0',
          type: 'dev',
        },
        {
          name: 'Smart Contract & Security Audit',
          type: 'dev',
        },
        {
          name: 'Seed Round',
          type: 'sales',
        },
        {
          name: 'Social Media Launch',
          type: 'marketing',
        },
        {
          name: 'Marketing 1.0',
          type: 'marketing',
        },
      ],
    },
    {
      name: 'Milestone 2 - Q4 2023',
      features: [
        {
          name: 'Presale',
          type: 'sales',
        },
        {
          name: 'Game Demo 2.0',
          type: 'dev',
        },
        {
          name: 'Development',
          type: 'dev',
        },
        {
          name: 'Expand Team & forge Partners',
          type: 'marketing',
        },
        {
          name: 'Marketing 1.0',
          type: 'marketing',
        },
      ],
    },
    {
      name: 'Milestone 3 - Q4 2024',
      features: [
        {
          name: 'Public Round',
          type: 'sales',
        },
        {
          name: 'NFT  Creation',
          type: 'dev',
        },
        {
          name: 'Game Demo 3.0',
          type: 'dev',
        },
        {
          name: 'P&E Mechanics',
          type: 'dev',
        },
        {
          name: 'Marketing 1.0',
          type: 'marketing',
        },
      ],
    },
    {
      name: 'Milestone 4 - Q2 2024',
      features: [
        {
          name: 'Game Development',
          type: 'dev',
        },
        {
          name: 'NFT Marketplace Creation',
          type: 'dev',
        },
        {
          name: 'P&E Testing',
          type: 'dev',
        },
        {
          name: 'Multiplayer Creation',
          type: 'dev',
        },
        {
          name: 'Marketing 1.0',
          type: 'marketing',
        },
        {
          name: 'Token Generation Event',
          type: 'sales',
        },
      ],
    },
    {
      name: 'Milestone 5 - Q3 2024',
      features: [
        {
          name: 'NFT Release',
          type: 'sales',
        },
        {
          name: 'NFT Marketplace Launch',
          type: 'dev',
        },
        {
          name: 'Multiplayer Testing',
          type: 'dev',
        },
        {
          name: 'Token Listing',
          type: 'sales',
        },
        {
          name: 'Marketing 2.0',
          type: 'marketing',
        },
      ],
    },
    {
      name: 'Milestone 6 - Q4 2024',
      features: [
        {
          name: 'Alpha Release',
          type: 'dev',
        },
        {
          name: 'Bug Bounty Program',
          type: 'dev',
        },
        {
          name: 'Testnet Launch',
          type: 'dev',
        },
        {
          name: 'Marketing 2.0',
          type: 'marketing',
        },
      ],
    },
    {
      name: 'Milestone 7 - Q1 2025',
      features: [
        {
          name: 'Full Game Release',
          type: 'dev',
        },
        {
          name: 'Scaling Reward System',
          type: 'dev',
        },
        {
          name: 'Game Update',
          type: 'dev',
        },
        {
          name: 'Tournaments',
          type: 'dev',
        },
        {
          name: 'Continuous Development',
          type: 'dev',
        },
        {
          name: 'Full Game Release',
          type: 'dev',
        },
      ],
    },
  ])
  const [sliding, setSliding] = useState(false)
  // eslint-disable-next-line
  const [currentMilestone, setMilestone] = useState(0)
  const team = [
    {
      name: 'Sako',
      title: 'Founder',
      image: Sako,
    },
    {
      name: 'Grano',
      title: 'Founder',
      image: Grano,
    },
    {
      name: 'Marko',
      title: 'Head of Game Development',
      image: Marko,
    },
    {
      name: 'Andre',
      title: 'Head of Web3',
      image: Andre,
    },
  ]
  const ReloadHandler = () => {
    window.location.reload()
  }
  const [performingAction, setPerformingAction] = useState(false)
  const [hotpinkValue, setHotpinkValue] = useState(50)
  const [rotationValue, setRotationValue] = useState(-0.25)

  // Event handler for when hovering on any <p> tag
  const handleHover = (percentage) => {
    // Update hotpinkValue and rotationValue based on the hovered percentage
    setHotpinkValue(percentage)
    const newRotationValue = -0.5 * (percentage / 100) // Using -0.5 for half after the decimal
    setRotationValue(newRotationValue)
  }
  useEffect(() => {
    if (currentStage <= 3) {
      if (soldTokens === 0) {
        setCurrentStage(currentStage + 1)
      }
    } else {
      setCurrentStage(1)
    }
    // eslint-disable-next-line
  }, [soldTokens])
  useEffect(() => {
    if (currentStage <= 3 || currentStage > 0) {
      setUsdtRaised(0)
      setSoldTokens(0)
      setSellPrice(presaleStages[currentStage - 1]?.sellPrice)
      setPricePerToken(presaleStages[currentStage - 1]?.pricePerToken)
      setMaxTokens(presaleStages[currentStage - 1]?.maxTokens)
    }
  }, [currentStage])
  // eslint-disable-next-line
  const [images, setImages] = useState(photos)
  const [current, setCurrent] = useState()
  const slideRef = useRef(null)
  const getSliderSettings = () => {
    return {
      dots: false,
      autoplay: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      useCSS: true,
      centerMode: true,
      beforeChange: () => {
        setSliding(true)
      },
      afterChange: () => {
        setSliding(false)
      },
    }
  }

  const handleClickImage = (e, image, i) => {
    e && e.preventDefault()
    setCurrent({
      image: image,
      index: i,
    })
  }

  const handleCloseModal = (e) => {
    e && e.preventDefault()
    setCurrent('')
  }
  const handleBuy = () => {
    setSoldTokens(
      parseFloat(soldTokens) + parseFloat(sellPrice) <= maxTokens
        ? parseFloat(soldTokens) + parseFloat(sellPrice)
        : maxTokens,
    )
    setUsdtRaised(
      parseFloat(usdtRaised) + parseFloat(sellPrice) * pricePerToken,
    )
  }
  const settings = getSliderSettings()
  useEffect(() => {
    // Round the usdtRaised value and update the rounded state
    const roundedValue = Math.round(usdtRaised)
    setUsdtRaised(roundedValue)
  }, [usdtRaised])
  const handlePrev = () => {
    slideRef.current.slickPrev()
  }
  const handleNext = () => {
    slideRef.current.slickNext()
  }

  const handlePlayVideo = () => {
    const video = document.getElementById('video')

    if (video.paused) {
      video.play()
    } else {
      video.pause()
    }
  }

  return (
    <div
      id="top"
      className="min-w-[390px]  overflow-x-hidden relative bg-[#07071C] "
    >
      {/* side social icons div */}
      <div className="fixed top-[30%] z-[100000] border transition border-l-0 hover:bg-[#00D1FF0F] border-white bg-[#00d0ff2b] w-16 h-36 flex flex-col items-center justify-center gap-4">
        <BsYoutube className="text-2xl text-white hover:text-[#F80AFB] hover:scale-105 duration-200 cursor-pointer" />
        <BsInstagram className="text-2xl text-white hover:text-[#F80AFB] hover:scale-105 duration-200 cursor-pointer" />
        <img
          src={x}
          alt=""
          className="w-6 hover:brightness-100 hover:invert-0 brightness-0 invert cursor-pointer  "
        />
      </div>
      {/* nav & her section */}
      <section className="bg-[url('./assets/bg.png')] w-full min-h-[1300px] bg-no-repeat bg-cover bg-center absolute z-[1000]">
        <div className="pt-2 px-4 md:px-20 flex">
          <img
            src={Logo}
            className="h-16 w-40 md:h-20 md:w-64 cursor-pointer"
            alt="Logo"
            onClick={ReloadHandler}
          />
          {/* navbar */}
          <nav className="flex justify-end lg:justify-center gap-20 items-end w-[70%]">
            <div className="text-white">
              <ul className="hidden lg:flex justify-center gap-8 text-lg font-bold">
                <li className="hover:text-[#F80AFB]  duration-200 cursor-pointer">
                  <Link
                    to="presale"
                    smooth={true}
                    offset={-70}
                    duration={1000}
                    className="cursor-pointer"
                  >
                    Presale
                  </Link>
                </li>
                <li className="hover:text-[#F80AFB]  duration-200 cursor-pointer">
                  <Link
                    to="about"
                    smooth={true}
                    offset={-70}
                    duration={1000}
                    className="cursor-pointer"
                  >
                    About Us
                  </Link>
                </li>
                <li className="hover:text-[#F80AFB]  duration-200 cursor-pointer">
                  <Link
                    to="tokenomics"
                    smooth={true}
                    offset={-70}
                    duration={1000}
                    className="cursor-pointer"
                  >
                    Tokenomics
                  </Link>
                </li>
                <li className="hover:text-[#F80AFB]  duration-200 cursor-pointer">
                  <Link
                    to="roadmap"
                    smooth={true}
                    offset={-70}
                    duration={1000}
                    className="cursor-pointer"
                  >
                    Roadmap
                  </Link>
                </li>
                <li className="hover:text-[#F80AFB]  duration-200 cursor-pointer">
                  <Link
                    to="team"
                    smooth={true}
                    offset={-70}
                    duration={1000}
                    className="cursor-pointer"
                  >
                    Team
                  </Link>
                </li>
                <li className="hover:text-[#F80AFB]  duration-200 cursor-pointer">
                  Litepaper
                </li>
              </ul>
              <GiHamburgerMenu
                className="block lg:hidden text-3xl"
                onClick={() => {
                  setMobileNav(true)
                }}
              />
            </div>
          </nav>
        </div>
        <div
          className={`${
            mobileNav === true
              ? 'w-full text-white bg-[#07071C]  h-1/2  overflow-hidden absolute top-0'
              : 'hidden'
          }`}
        >
          <RxCross2
            className="text-4xl text-white absolute  right-6 top-2 "
            onClick={() => {
              setMobileNav(false)
            }}
          />
          {/* mobile nav */}
          <nav
            className={`${
              mobileNav === true
                ? 'flex flex-col items-center h-full justify-center'
                : 'hidden'
            }`}
          >
            <ul className="flex flex-col justify-center items-center gap-6 mt-[50px]">
              <li className="text-lg font-bold hover:text-[#F80AFB] cursor-pointer ">
                Presale
              </li>
              <li className="text-lg font-bold hover:text-[#F80AFB] cursor-pointer ">
                About Us
              </li>
              <li className="text-lg font-bold hover:text-[#F80AFB] cursor-pointer ">
                Tokenomics
              </li>
              <li className="text-lg font-bold hover:text-[#F80AFB] cursor-pointer ">
                Roadmap
              </li>
              <li className="text-lg font-bold hover:text-[#F80AFB] cursor-pointer">
                Team
              </li>
              <li className="text-lg font-bold hover:text-[#F80AFB] cursor-pointer">
                Litepaper
              </li>
            </ul>
          </nav>
        </div>
        {/* hero section */}
        <section className="flex aboutHeader flex-col justify-center items-center pt-20 md:pt-32">
          <h1 className=" text-white font-bold">Token Pre-Sale Start Soon</h1>
          <p className="md:text-xl text-lg text-white text-center max-w-lg py-10 leading-8">
            Embrace the power of Martial Rabbits, a pioneering Metaverse
            experience that offers a unique blend of combat, adventure, and
            social interaction.
          </p>
          <h5 className="text-2xl font-bold text-white">Soon available!</h5>
          <button className="w-60 h-16 mt-2 btn-one  text-black text-base tracking-widest font-semibold pl-4 flex items-center gap-4">
            <FaDownload className="text-3xl" />
            Game Demo
          </button>
        </section>
      </section>
      {/* presale section */}
      <section
        id="presale"
        className="flex  relative flex-col justify-center items-center text-white bg-[#07071C] mt-[51rem] md:mb-40 mb-[3rem]"
      >
        <div className="z-[1000] presaleSec absolute left-1/2 -translate-x-1/2 top-[100px] md:-top-[20px]  bg-[url('./assets/img1.png')] menu-design-bg w-[400px] md:w-[530px] h-fit md:pb-0 md:pt-0 pb-[50px] pt-[110px] md:aspect-square   flex flex-col items-center justify-center gap-4 -mt-72">
          <h4 className="md:text-2xl text-sm  text-white font-bold">
            Public PRESALE{' '}
            <span className="text-[#F6CC72]">
              {currentStage}.Stage / 3.Stage
            </span>
          </h4>
          <div className="border flex items-center justify-center border-[#F6CC72] rounded-full  w-48 h-12">
            {sellPrice} MR = ${Math.round(sellPrice * pricePerToken)}
          </div>
          <div
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.30)' }}
            className="bg-[rgba(255, 255, 255, 0.30)] h-[12px] rounded-full w-[60%]"
          >
            <div
              style={{
                // width: (soldTokens * 100) / maxTokens + '%',
                width: '60%',
                background: ' linear-gradient(to right, #00d2ff, #d015ff)',
              }}
              className=" h-full transition-all duration-500 ease-in-out rounded-full"
            ></div>
          </div>
          <div className="flex flex-col md:flex-row gap-2">
            <p>Token Sold: </p>
            <span>
              {soldTokens} / {maxTokens}
            </span>
          </div>
          <div className="flex flex-col md:flex-row gap-2">
            <p>USDT Raised: </p>
            <span>
              {usdtRaised} / {maxTokens * pricePerToken}
            </span>
          </div>
          <button
            onClick={() => {
              setPerformingAction(true)
              if (connected) {
                setTimeout(() => {
                  handleBuy()
                  setPerformingAction(false)
                }, [1000])
              } else {
                setTimeout(() => {
                  setConnected(true)
                  setPerformingAction(false)
                }, [2000])
              }
            }}
            className="btn-two flex justify-center items-center rounded-full w-48 h-12"
          >
            {performingAction ? (
              <ReactLoading
                type={'spin'}
                color={'#fff'}
                height={'20px'}
                width={'20px'}
              />
            ) : !connected ? (
              ' Connect Wallet'
            ) : (
              'Buy Now'
            )}
          </button>
        </div>
        <div className="flex pt-[300px] flex-col md:flex-row flex-wrap justify-center lg:flex-row gap-8 mt-16">
          <div className="bg-[url('./assets/img2.png')] w-[305px] h-[186px] text-white flex flex-col justify-center items-center  gap-2">
            <h4 className="text-2xl font-bold">PRESALE 1 STAGE</h4>
            <p className="text-purple-800 text-2xl">
              {' '}
              ${presaleStages[0].pricePerToken}
            </p>
            <p className="text-xl font-[600]">Price Per Token</p>
          </div>
          <div className="bg-[url('./assets/img3.png')] w-[305px] h-[186px] text-white flex flex-col justify-center items-center gap-2">
            <p style={{ fontWeight: '700' }} className="text-2xl font-bold">
              PRESALE 2 STAGE
            </p>
            <p className="text-blue-800 text-2xl">
              {' '}
              ${presaleStages[1].pricePerToken}
            </p>
            <p className="text-xl font-[600]">Price Per Token</p>
          </div>
          <div className="bg-[url('./assets/img4.png')] w-[310px] h-[186px] text-white flex flex-col justify-center items-center gap-2">
            <h4 className="text-2xl font-bold">PRESALE 3 STAGE</h4>
            <p className="text-pink-800 text-2xl">
              ${presaleStages[2].pricePerToken}
            </p>
            <p className="text-xl font-[600]">Price Per Token</p>
          </div>
        </div>
        <div className=" mt-[150px] mb-[70px] md:mb-[120px] md:mt-[300px]  md:scale-[100%] lg:scale-125 xl:scale-150">
          <div className="cursor-pointer relative menu-design-bg w-full min-w-[390px] max-w-[1024px] md:w-[768px] h-[230px] md:h-[500px] flex justify-center items-center">
            <video
              src={vid}
              id="video"
              className="video-border video relative z-10 w-full h-[107%] scale-x-105 "
            ></video>
            <div
              className="absolute z-10"
              onClick={(ev) => {
                handlePlayVideo()
              }}
            >
              <img src={videoRec} alt="" />
            </div>
            <div
              style={{ filter: 'blur(220px)' }}
              className="absolute top-0 w-[100%] h-[100%] bg-[#9B00FB99] rounded-full "
            ></div>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section id="about" className="text-white bg-[#07071C]">
        <div className="relative  aboutHeader z-10 mb-[40px]">
          <h1 className="  font-bold  text-center">About</h1>
          <h1 className=" font-bold text-center py-2 md:py-4">
            <span className="text-[#F80AFB]">M</span>artial{' '}
            <span className="text-[#F80AFB]">R</span>abbits Metaverse
          </h1>
        </div>

        <div>
          <div className="  bg-cover  w-full h-fit bg-repeat-round relative">
            <div className="absolute top-[50px] xs:top-[100px] md:top-[150px]  left-[50%] -translate-x-[50%] -translate-y-[10%] z-50 h-[180px] menu-design-bg w-[80%] lg:w-[60%] max-w-[650px] md:h-[173px]">
              <p className="text-sm md:text-base  flex justify-center items-center pl-1 w-[90%] absolute top-1/2 h-full left-1/2 -translate-x-1/2 -translate-y-1/2">
                Martial Rabbits is transforming the Metaverse with our
                revolutionary product. We provide a unique blend of free-to-play
                and play & earn experiences, including PVP battles, seasonal
                events, single and multi-player modes offering captivating
                storylines and missions, world-building, and more.
              </p>
              <img src={textBox} alt="" />
            </div>
            <div>
              <img
                src={aboutImage}
                alt=""
                className=" w-full object-cover h-full relative z-10"
              />
            </div>
            <div
              style={{ filter: 'blur(220px)' }}
              className="absolute top-0 w-[100%] h-[100%] bg-[#9B00FB99] rounded-full "
            ></div>
          </div>
        </div>
      </section>
      {/* menu design section */}
      <section className=" text-white aboutHeader relative overflow-visible   w-full flex flex-col gap-8 justify-center items-center pt-40">
        <h1 className="text-3xl  md:text-5xl relative z-10 font-bold text-center py-4">
          Menu <span className="text-[#F80AFB]">Design</span>
        </h1>
        <div className="bg-[url('./assets/img9.png')] relative z-10 menu-design-bg max-w-[879px] w-full h-[535px]">
          <div className="h-full">
            <div className="carousel relative z-0 ">
              <div className="relative z-0">
                <div className="relative z-10 ">
                  <Slider ref={slideRef} {...settings}>
                    {images.map((image, index) => (
                      <div
                        key={index}
                        onClick={(e) => {
                          if (!sliding) {
                            handleClickImage(e, image, index)
                          }
                        }}
                        className="flex-imp justify-center items-center"
                      >
                        <img src={image} alt="logo" />
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>

              {current && (
                <Lightbox
                  mainSrc={current.image}
                  nextSrc={images[(current.index + 1) % images.length]}
                  prevSrc={
                    images[(current.index + images.length - 1) % images.length]
                  }
                  enableZoom={false}
                  animationDuration={500}
                  mainSrcThumbnail={current.image}
                  onCloseRequest={handleCloseModal}
                  onMovePrevRequest={() =>
                    setCurrent({
                      image:
                        images[
                          (current.index + images.length - 1) % images.length
                        ],
                      index:
                        (current.index + images.length - 1) % images.length,
                    })
                  }
                  onMoveNextRequest={() =>
                    setCurrent({
                      image: images[(current.index + 1) % images.length],
                      index: (current.index + 1) % images.length,
                    })
                  }
                />
                // <ImagesViewer></ImagesViewer>
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center w-3/4 gap-2 relative z-10">
          <p className="h-1 w-3/4 bg-[#F80AFB] rounded-full"> </p>
          <button
            className="border hover:bg-[#F80AFB] transition border-[#F80AFB] p-2"
            onClick={() => handlePrev()}
          >
            <AiOutlineLeft />
          </button>
          <button
            className="border hover:bg-[#F80AFB] transition border-[#F80AFB] p-2"
            onClick={() => handleNext()}
          >
            <AiOutlineRight />
          </button>
          <p className="h-1 w-3/4 bg-[#F80AFB] rounded-full"> </p>
        </div>
        <div
          style={{ filter: 'blur(220px)' }}
          className="absolute top-1/2 -translate-y-1/2 w-[100%] z-0 h-[200px] bg-[#9B00FB99] rounded-full "
        ></div>
      </section>
      {/* play earn connect section */}

      <section className="text-white aboutHeader relative overflow-visible  z-0 bg-[#07071C] w-full flex  flex-col gap-4 justify-center items-center py-25 md:py-40">
        <h1 className="text-xl relative z-10 md:text-5xl font-bold text-center py-4">
          PLAY, EARN, <span className="text-[#F80AFB]">CONNECT</span>
        </h1>
        <p className="text-[15px] relative z-10 pl-7 pr-7 md:max-w-3xl text-center font-semibold mb-4">
          As gamers ourselves, our priority is maximum fun. Our game seamlessly
          integrates multiple in-game avenues for a diverse and engaging
          experience, all without any initial investment required.
        </p>
        <div className="flex flex-col relative z-10 md:flex-row gap-4 flex-wrap md:mt-0 justify-center">
          <div className="relative">
            <img
              src={Card1}
              className="max-w-sm h-[370px] w-full md:w-auto md:h-[585px]"
              alt="Card1"
            />
            <div className="max-w-sm p-4 h-[157px]  absolute bottom-0 bg-[#78007996] ml-2 text-white text-center">
              <h5 className=" text-[16px] md:text-xl font-bold">
                Earn & Trade
              </h5>
              <p className="text-[12px] leading-4  md:text-[14px]"></p>Earn $MR
              tokens and NFTs, as well as other in-game assets, by engaging in
              diverse game modes, and trade with them within the in-game MR
              Marketplace.
            </div>
          </div>
          <div className="relative w-[396.246px] ">
            <img
              src={Card2}
              className="  w-full h-full md:w-[396.246px]"
              alt="Card2"
            />
            <div className=" absolute bottom-0 h-[150px]  mr-5 text-white text-center">
              <div className="relative z-10 p-4 ">
                <h5 className="text-[16px] md:text-xl font-bold">
                  Play & Conquer
                </h5>
                <p className="text-[12px] leading-4  md:text-[14px]">
                  Immerse yourself in Single or Multiplayer Modes on your own,
                  against others or team-up with your friends. Complete various
                  Quests in both Modes. Participate in massive PVP battles
                  including Battle Royal, Deathmatches, Seasonal Events, Clan
                  Battles and more.
                </p>
              </div>
              <div className="absolute -space-y-[1.73px] bottom-0 left-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="375"
                  height="157"
                  viewBox="0 0 381 157"
                  fill="none"
                >
                  <g filter="url(#filter0_b_144_69)">
                    <path
                      d="M0.857117 0.650391H380.379V142.459L367.391 159.769L334.829 160.435H0.857117V0.650391Z"
                      fill="#9B00FB"
                      fill-opacity="0.4"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_b_144_69"
                      x="-2.14288"
                      y="-2.34961"
                      width="385.522"
                      height="165.785"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feGaussianBlur
                        in="BackgroundImageFix"
                        stdDeviation="1.5"
                      />
                      <feComposite
                        in2="SourceAlpha"
                        operator="in"
                        result="effect1_backgroundBlur_144_69"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_backgroundBlur_144_69"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
          <div className="relative -ml-7">
            <img
              src={Card3}
              className="max-w-sm h-[370px] w-full md:w-auto md:h-[585px]"
              alt="Card3"
            />
            <div className="max-w-sm p-4 h-[157px] absolute bottom-0 bg-[#78007996] ml-2 text-white text-center">
              <h5 className="text-[16px] md:text-xl font-bold">
                Connect & Create
              </h5>
              <p className="text-[12px] md:text-sm"></p>Use the game
              communication options to forge alliances with fellow Martial
              Rabbits and collaborate to master the diverse Game Modes. Create
              an entirely new world within the game.
            </div>
          </div>
        </div>
        <div
          style={{ filter: 'blur(220px)' }}
          className="absolute top-1/2 -translate-y-1/2 w-[100%] z-0 h-[200px] bg-[#9B00FB99] rounded-full "
        ></div>
      </section>

      {/* token allocation section */}
      <section
        id="tokenomics"
        className="text-white h-fit aboutHeader relative  z-10 overflow-visible  mt-[40px]  w-full  flex flex-col gap-4 justify-center items-center  "
      >
        <h1 className="text-3xl relative z-20 md:text-5xl font-bold text-center">
          Token <span className="text-[#F80AFB]">Allocation</span>
        </h1>
        <div className="w-full  h-fit flex relative ">
          <div
            style={{ filter: 'blur(220px)' }}
            className="absolute bottom-0 w-[100%] z-0 h-[50px] lg:h-[100px] bg-[#9B00FB99] rounded-full "
          ></div>
          <div>
            <img
              src={tokenAllocBg}
              alt=""
              className=" w-full  object-cover  md:object-fill h-full   left-0  top-0 absolute  z-10  "
            />
          </div>
          <div className=" w-full    z-20  bg-no-repeat bg-cover md:bg-contain    flex flex-col  justify-center items-center">
            <div className=" lg:scale-125 bg-[url('./assets/img11.png')] bs-300 md-bs-525 py-[50px] md:py-[200px] z-50 flex flex-col items-center justify-center gap-4 w-full h-full bg-no-repeat center-text">
              <div className="lg:max-w-[600px]   md:max-w-[548px] max-w-[220px] w-full text-center h-[300px] md:h-[470px] flex flex-col items-center justify-center mt-[0px] md:mt-[50px] relative text-3xl font-semibold">
                {' '}
                <div className="progress-bar  ">
                  <div
                    style={{
                      transform: ` rotate(calc((${rotationValue} * 360deg) + 180deg))`,
                    }}
                    className=" "
                  >
                    <svg viewBox="0 0 36 36" className="circular-chart">
                      <path
                        className="circle transition duration-700 ease-linear"
                        style={{
                          strokeDasharray: `${hotpinkValue},  100 , ${hotpinkValue}`,
                        }}
                        d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                         a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                  </div>
                </div>
                <div
                  className="absolute  md:text-[26px] text-[14px] top-[0%] left-[-24%] md:left-[2%] flex gap-1"
                  onMouseEnter={() => handleHover(13)}
                >
                  Team <p className="text-[#F80AFB]">13%</p>
                </div>
                <div
                  className="absolute md:text-[26px] text-[14px] top-[20%] md:-left-[14%] -left-[48%] flex gap-1 "
                  onMouseEnter={() => handleHover(4)}
                >
                  Advisors <p className="text-[#F80AFB]">4%</p>
                </div>
                <div
                  className="absolute top-[40%] md:text-[26px] text-[14px] -left-[70%] md:-left-[24%] flex gap-1"
                  onMouseEnter={() => handleHover(9)}
                >
                  Marketing <p className="text-[#F80AFB]">9%</p>
                </div>
                <div
                  className="absolute top-[60%] md:text-[26px] text-[14px] -left-[70%] md:-left-[26%] flex gap-1"
                  onMouseEnter={() => handleHover(7)}
                >
                  Development <p className="text-[#F80AFB]">7%</p>
                </div>
                <div
                  className="absolute top-[80%] md:text-[26px] text-[14px] -left-[45%] md:-left-[17%] flex gap-1"
                  onMouseEnter={() => handleHover(6)}
                >
                  Growth Fund <p className="text-[#F80AFB]">6%</p>
                </div>
                <div
                  className="absolute top-[0%] md:text-[26px] text-[14px] right-[-17%] md:right-[2%] flex gap-1"
                  onMouseEnter={() => handleHover(6)}
                >
                  <p className="text-[#F80AFB]">6%</p>Seed
                </div>
                <div
                  className="absolute top-[20%] md:text-[26px] text-[14px] -right-[35%] md:-right-[16%] flex gap-1"
                  onMouseEnter={() => handleHover(16)}
                >
                  <p className="text-[#F80AFB]">16%</p>Pre Sale
                </div>
                <div
                  className="absolute top-[40%] md:text-[26px] text-[14px] -right-[53%] md:-right-[22%] flex gap-1"
                  onMouseEnter={() => handleHover(2)}
                >
                  <p className="text-[#F80AFB]">2%</p>Public Sale
                </div>
                <div
                  className="absolute top-[60%] md:text-[26px] text-[14px] -right-[58%] md:-right-[20%] flex gap-1"
                  onMouseEnter={() => handleHover(7)}
                >
                  <p className="text-[#F80AFB]">7%</p>Liquidity
                </div>
                <div
                  className="absolute top-[80%] md:text-[26px] text-[14px] -right-[36%] md:-right-[8%] flex gap-1"
                  onMouseEnter={() => handleHover(30)}
                >
                  <p className="text-[#F80AFB]">30%</p>Rewards
                </div>
                <p className=" text-sm md:text-xl -mt-[60px] md:-mt-[140px] text-[#FF4581] font-medium ">
                  Total Supply
                </p>
                <h2 className="text-[20px] md:text-3xl font-semibold">
                  1 000 000 000
                </h2>
                <p className="md:text-xl text-sm text-[#FF4581] font-medium">
                  T$MR Tokens
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* road map section  */}
      <section
        id="roadmap"
        className="text-white  z-0  aboutHeader relative bg-[#07071C] w-full py-[150px] flex flex-col items-center justify-center"
      >
        <h1 className="text-3xl relative z-10 md:text-5xl font-bold text-center">
          Road<span className="text-[#00D2FF]">map</span>
        </h1>
        <div className="flex relative  z-10 justify-center lg:flex-row md:max-w-[817px] flex-wrap md:flex-nowrap mt-10 gap-8">
          <div className=" relative w-fit bg-100 bg-no-repeat  h-fit text-white flex flex-col justify-center items-center gap-2">
            <div className="absolute text-center pl-4 pr-3 ">
              <img
                src={RoadmapLogo3}
                className="w-10 h-10 mx-auto"
                alt="RoadmapLogo3"
              />
              <p className="text-xl">Marketing & Community</p>
            </div>
            <img src={textBoxRoadMap} alt="" />
          </div>
          <div className=" relative w-fit bg-100 bg-no-repeat  h-fit text-white flex flex-col justify-center items-center gap-2">
            <div className="absolute text-center pl-4 pr-3 ">
              <div className="w-10 h-10 mx-auto">{Marketing}</div>
              <p className="text-xl">Development, Security & Testing</p>
            </div>
            <img src={textBoxRoadMap} alt="" />
          </div>
          <div className="bg-[url('./assets/img19.png')] bg-100 bg-no-repeat w-[260px] h-[136px] text-white flex flex-col justify-center items-center gap-2">
            <img src={RoadmapLogo1} className="w-10 h-10" alt="RoadmapLogo1" />
            <p className="text-xl">Sales</p>
          </div>
        </div>
        <div className="w-[100%]   z-10 relative mx-auto my-10 flex md:flex-row flex-col gap-10">
          <Swiper
            modules={[Navigation]}
            slidesPerView={5}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
              1350: {
                slidesPerView: 4,
                spaceBetween: 100,
              },
              1850: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
              2300: {
                slidesPerView: 6,
                spaceBetween: 50,
              },
              2700: {
                slidesPerView: 7,
                spaceBetween: 50,
              },
            }}
            initialSlide={0}
            spaceBetween={80}
            slideNextClass="NextSlide"
            slidePrevClass="PrevSlide"
            navigation={true}
            className="mySwiper"
          >
            {/* For Spacing */}

            {roadmap.map((el, index) => (
              <SwiperSlide>
                <div
                  className={`${
                    currentMilestone === index
                      ? "bg-[url('./assets/img20.png')]"
                      : "bg-[url('./assets/img21.png')]"
                  } lg:ml-[150px]  bg-no-repeat menu-design-bg relative    w-[360px] m-auto min-h-[370px]  text-white p-4 md:p-8`}
                >
                  {}{' '}
                  <h4 className="text-[#D8A4F9] font-bold text-2xl text-center">
                    {el.name}
                  </h4>
                  <div className="ml-6">
                    {el.features.map((ft) => (
                      <div className="flex items-center gap-2 mt-4">
                        <img
                          src={
                            ft.type === 'dev'
                              ? RoadmapLogo3
                              : ft.type === 'marketing'
                              ? RoadmapLogo2
                              : RoadmapLogo1
                          }
                          className="w-[26px] h-[26px]"
                          alt="RoadmapLogo3"
                        />
                        <p className="text-base">{ft.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            ))}
            {window.innerWidth > 1000 && (
              <SwiperSlide>
                <div></div>
              </SwiperSlide>
            )}
          </Swiper>
        </div>
        <p className="text-center text-lg  z-10 relative mt-10 px-4">
          From our humble origins to the grand unveiling, be a part of the
          Martial Rabbits Metaverse journey!
        </p>
        <div className="flex items-center  z-10 relative mx-auto w-3/4 gap-2 my-10">
          <p className="h-1 w-3/4 bg-[#F80AFB] rounded-full"> </p>
          <button
            onClick={() => $('#roadmap .swiper-button-prev').click()}
            className="border hover:bg-[#F80AFB] transition border-[#F80AFB] p-2"
          >
            <AiOutlineLeft />
          </button>
          <button
            onClick={() => $('#roadmap .swiper-button-next').click()}
            className="border hover:bg-[#F80AFB] transition border-[#F80AFB] p-2"
          >
            <AiOutlineRight />
          </button>
          <p className="h-1 w-3/4 bg-[#F80AFB] rounded-full"> </p>
        </div>
        <div
          style={{ filter: 'blur(150px)' }}
          className="absolute top-1/2 -translate-y-1/2 w-[80%] z-0 h-[15%] bg-[#9B00FB99] rounded-full "
        ></div>
      </section>
      {/* meet the team */}
      <section
        id="team"
        className="text-white aboutHeader  bg-[#07071C] h-full w-full flex flex-col  items-center justify-center md:py-40 py-25"
      >
        <h1 className="text-3xl pb-[40px] md:text-5xl font-bold text-center md:mt-2  mt-20 px-4">
          Meet The <span className="text-[#00D2FF]">Team!</span>
        </h1>
        <div className="relative w-full h-fit flex justify-center items-center">
          <div className=" py-[8rem] bg-[url('./assets/teamBg.png')] bg-100 bg-no-repeat w-full flex flex-col gap-4 justify-center items-center space-y-[30px]">
            <div className="flex flex-wrap justify-center gap-10">
              {team.map((el, index) => (
                <div
                  key={index}
                  className="relative teamCard  w-[294px] h-[400px] z-50 flex flex-col items-center justify-center gap-4  menu-design-bg bg-no-repeat bg-center"
                >
                  <div className="relative">
                    <img
                      alt={el.name}
                      src={el.image}
                      className="absolute left-3 top-2 z-10"
                    />
                    <div className="absolute hoverEffect left-3 top-2 ">
                      {' '}
                      {hoverTeamBox}
                    </div>
                    <div>{teamBox}</div>
                  </div>

                  <p className="font-bold text-xl text-center absolute bottom-[27%] tracking-widest">
                    {el.name}
                  </p>
                  <p className="text-[#00D2FF] font-bold  text-center  text-xl absolute top-[77%] tracking-widest">
                    {el.title}
                  </p>
                </div>
              ))}
            </div>
            <div className="text-3xl font-bold text-white text-center font-bold">
              <p>AND MORE THAN</p>
              <p className="text-[#FF4581]">10+ SPECIALISTS</p>
            </div>
          </div>
        </div>
      </section>
      {/* footet section */}
      <section className="text-white pt-[200px] pb-[50px] bg-[#07071C] w-full flex flex-col justify-around items-center mt-[3rem] md:-mt-48">
        <div className=" bg-[url('./assets/img24.png')] bg-100 bg-no-repeat w-[80%] h-[520px] md:h-[400px] flex flex-col gap-4 justify-center items-center relative">
          <div className="absolute md:-left-8 left-0 top-[100px]">
            <p className="text-[#F80AFB] font-semibold text-xl hover:scale-105 duration-200 ease-in-out">
              Get early access to our project
            </p>
            <h5 className="text-5xl font-bold pl-6 hover:scale-105 duration-200 ease-in-out">
              SUBSCRIBE
            </h5>
            <h5 className="text-5xl font-bold pl-9 hover:scale-105 duration-200 ease-in-out">
              TO OUR NEWS
            </h5>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:ml-[26rem] mt-7">
              <input
                type="text"
                placeholder="Enter Email Address"
                className="glass-input footer-input"
              />
              <div>
                <button className="w-60 h-16 relative z-0 btn-one text-white text-center flex justify-center mt-2 btn-one  text-black text-base tracking-widest font-semibold   items-center cursor-pointer">
                  Subscribe
                </button>

                <img
                  src={FooterPerson}
                  alt="footer person"
                  className="hidden md:block w-fit  FooterPerson   max-w-full translate-x-[40%] -translate-y-[79%]"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[90%] mt-20 relative z-10">
          <footer className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-16 md:items-end pt-2">
            <div
              to="top"
              smooth={true}
              offset={-70}
              onClick={() => scrollToTop()}
              duration={1000}
              className="cursor-pointer"
            >
              <img src={Logo} alt="logo" className="h-20 w-64" />
            </div>
            <div className="text-white relative z-10">
              <ul className="hidden lg:flex gap-8 text-lg font-bold">
                <li className="hover:text-[#F80AFB]  duration-200 cursor-pointer">
                  <div
                    to="presale"
                    smooth={true}
                    offset={-70}
                    onClick={() => focusOnSection('presale')}
                    duration={1000}
                    className="cursor-pointer"
                  >
                    Presale
                  </div>
                </li>
                <li className="hover:text-[#F80AFB]  duration-200 cursor-pointer">
                  <div
                    to="about"
                    onClick={() => focusOnSection('about')}
                    smooth={true}
                    offset={-70}
                    duration={1000}
                    className="cursor-pointer "
                  >
                    About Us
                  </div>
                </li>
                <li className="hover:text-[#F80AFB]  duration-200 cursor-pointer">
                  <div
                    to="tokenomics"
                    smooth={true}
                    onClick={() => focusOnSection('tokenomics')}
                    offset={-70}
                    duration={1000}
                    className="cursor-pointer"
                  >
                    Tokenomics
                  </div>
                </li>
                <li className="hover:text-[#F80AFB]  duration-200 cursor-pointer">
                  <div
                    to="roadmap"
                    smooth={true}
                    onClick={() => focusOnSection('roadmap')}
                    offset={-70}
                    duration={1000}
                    className="cursor-pointer"
                  >
                    Roadmap
                  </div>
                </li>
                <li className="hover:text-[#F80AFB]  duration-200 cursor-pointer">
                  <div
                    to="team"
                    smooth={true}
                    offset={-70}
                    onClick={() => focusOnSection('team')}
                    duration={1000}
                    className="cursor-pointer"
                  >
                    Team
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex gap-4">
              <BsYoutube className="text-2xl text-white hover:text-[#F80AFB] hover:scale-105 duration-200 cursor-pointer" />
              <BsInstagram className="text-2xl text-white hover:text-[#F80AFB] hover:scale-105 duration-200 cursor-pointer" />
              <img
                src={x}
                alt=""
                className="w-6 hover:brightness-100 hover:invert-0 brightness-0 invert cursor-pointer  "
              />
            </div>
          </footer>
          <p className="h-1 w-full bg-[#F80AFB] mx-auto my-10" />
          <footer className="flex justify-between">
            <p className="text-[#F80AFB] font-semibold text-xs">
              &copy; 2023 Martial Rabbits. All rigths reserved.
            </p>
            <ul className="text-xs font-medium flex flex-wrap md:flex-nowrap gap-4">
              <li>
                <Link className="cursor-pointer">Litepaper</Link>
              </li>
              <li>
                <Link className="cursor-pointer">Legal Disclaimer</Link>
              </li>
              <li>
                <Link className="cursor-pointer">Privacy & Policy</Link>
              </li>
              <li>
                <Link className="cursor-pointer">Token Holder Agreement</Link>
              </li>
            </ul>
          </footer>
        </div>
      </section>
    </div>
  )
}

export default App
