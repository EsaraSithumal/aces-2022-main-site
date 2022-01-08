import React, { Component } from "react"
import styles from './Footer.module.css'
import Link from "next/link"
import Image from "next/image"

class Footer extends Component {
  render() {
    return (
      <>
      <div className="text-center py-3 bg-white">
        <h4 className="text-primary m-2"><b>LET'S DISCUSS</b></h4>
        <div className="row">
          <div className="col-5 align-center"><div className={styles.linesLeft} ></div></div>
          <div className="col-2 "><i className="fas fa-inbox"></i></div>
          <div className="col-5 align-center"><div className={styles.linesRight} ></div></div>
        </div>
        <p>aces@eng.pdn.ac.lk</p>
      </div>
      {/* <div className={`${styles["footer"]}`}>
      <div className="container text-center">
        <div className="row my-0">
          <div className="col-12 col-md-6 col-lg-2">
            <h4>Useful Links</h4>
            <div className="container" variant="flush" className={`${styles["footer-links"]}`}>
              <div className="row">
                <Link href="#" target="_blank">
                  <a>Gallery</a>
                </Link>
              </div>
              <div className="row">
                <Link href="mailto:aces@ce.pdn.ac.lk" target="_blank">
                  <a>Contact Us</a>
                </Link>
              </div>
              <div className="row">
                <Link href="https://aces.ce.pdn.ac.lk/" target="_blank">
                  <a>Hacker's club</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-2">
            <h4>Events</h4>
            <div className="container" variant="flush" className={`${styles["footer-links"]}`}>
              <div className="row">
                <Link href="#">
                  <a>Coders</a>
                </Link>
              </div>
              <div className="row">
                <Link href="#">
                  <a>HackaThon</a>
                </Link>
              </div>
              <div className="row">
                <Link href="#">
                  <a>Spark</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-4">
            <h4>Sessions</h4>
            <div className="container" variant="flush" className={`${styles["footer-links"]}`}>
              <div className="row">
                <Link href="#">
                  <a>Developer Series Sessions</a>
                </Link>
              </div>
              <div className="row">
                <Link href="#">
                  <a>Competitive Programming Sessions</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-4 text-center">
          <div className="container" className={`${styles["footer-follow"]}`}>
              <div className="row">
                <h4>Follow Us On</h4>
              </div>
              <div className="row">
                <div className="col-4">
                  <a
                    href="https://www.facebook.com/uophackers"
                    className={`${styles["follow-fb"]}`}
                  >
                    <i class="fab fa-facebook"></i>
                  </a>
                </div>
                <div className="col-4">
                  <a
                    href="https://www.youtube.com/channel/UCdsaElflkOhbX6Rv6r2uH5A/"
                    className={`${styles["follow-yt"]}`}
                  >
                    <i class="fab fa-youtube"></i>
                  </a>
                </div>
                <div className="col-4">
                  <a href="#" className={`${styles["follow-li"]}`}>
                    <i class="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row" className={`${styles["footer-logo-sec"]}`}>
          <div className="col-12">
            <Image
              src="/img/logo.png"
              width={150}
              height={60}
            />
            <p>
              Copyright © 2022 ACES, Association of Computer Engineering, University of Peradeniya. All
              Rights Reserved.
            </p>
          </div>
        </div>
      </div>
      </div> */}
      <div className={styles.container}>
        <div className="container text-center pb-0">
        <div className="row my-0">
          <div className="col-12 col-md-6 col-lg-2">
            <h4>Useful Links</h4>
            <div className="container" variant="flush" className={`${styles["footer-links"]}`}>
              <div className="row">
                <Link href="#" target="_blank">
                  <a>Gallery</a>
                </Link>
              </div>
              <div className="row">
                <Link href="mailto:aces@ce.pdn.ac.lk" target="_blank">
                  <a>Contact Us</a>
                </Link>
              </div>
              <div className="row">
                <Link href="https://hackersuop.github.io/" target="_blank">
                  <a>Hacker's club</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-2">
            <h4>Events</h4>
            <div className="container" variant="flush" className={`${styles["footer-links"]}`}>
              <div className="row">
                <Link href="#">
                  <a>Coders</a>
                </Link>
              </div>
              <div className="row">
                <Link href="#">
                  <a>Hackathon</a>
                </Link>
              </div>
              <div className="row">
                <Link href="#">
                  <a>Spark</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-4">
            <h4>Sessions</h4>
            <div className="container" variant="flush" className={`${styles["footer-links"]}`}>
              <div className="row">
                <Link href="#">
                  <a>Developer Series Sessions</a>
                </Link>
              </div>
              <div className="row">
                <Link href="#">
                  <a>Competitive Programming Sessions</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-4 text-center">
          <div className="container" className={`${styles["footer-follow"]}`}>
              <div className="row d-flex justify-center text-center">
                <h4 className="d-flex text-center w-100">Follow Us On</h4>
              </div>
              <div className="row">
                <div className="col-4">
                  <a
                    href="https://www.facebook.com/uophackers"
                    className={`${styles["follow-fb"]}`}
                  >
                    <i class="fab fa-facebook"></i>
                  </a>
                </div>
                <div className="col-4">
                  <a
                    href="https://www.youtube.com/channel/UCdsaElflkOhbX6Rv6r2uH5A/"
                    className={`${styles["follow-yt"]}`}
                  >
                    <i class="fab fa-youtube"></i>
                  </a>
                </div>
                <div className="col-4">
                  <a href="#" className={`${styles["follow-li"]}`}>
                    <i class="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row" className={`${styles["footer-logo-sec"]}`}>
          <div className="col-12 mb-0">
            <Image
              src="/img/logo.png"
              width={150}
              height={60}
            />
            <p>
              Copyright © 2022 ACES, Association of Computer Engineering, University of Peradeniya. All
              Rights Reserved.
            </p>
          </div>
        </div>
      </div>
      </div>
    </>
    )
  }
}

export default Footer;
