import styles from "../styles/Footer.module.scss"
import { Button } from "./Button"
import { Logo } from "./Logo"
export function Footer({video_link}) {
    return <div className={styles.footer}>
       <div className={styles.footer__container}>
            <div>
                <Logo></Logo>
            </div>

            <div className={styles.footer__links}>
              <a href="#hero">About us</a>
              <a href="#projects">Projects</a>
            </div>
            <div className={styles.footer__links}>
              <span>
                <svg width="24" height="24" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M256 224C273.673 224 288 209.673 288 192C288 174.327 273.673 160 256 160C238.327 160 224 174.327 224 192C224 209.673 238.327 224 256 224Z" fill="white"/>
                    <path d="M256 32C167.78 32 96 100.65 96 185C96 225.17 114.31 278.59 150.42 343.78C179.42 396.12 212.97 443.45 230.42 467C233.369 471.024 237.224 474.296 241.673 476.552C246.123 478.808 251.041 479.983 256.03 479.983C261.019 479.983 265.937 478.808 270.387 476.552C274.836 474.296 278.691 471.024 281.64 467C299.06 443.45 332.64 396.12 361.64 343.78C397.69 278.61 416 225.19 416 185C416 100.65 344.22 32 256 32ZM256 256C243.342 256 230.968 252.246 220.444 245.214C209.919 238.182 201.716 228.186 196.872 216.492C192.028 204.797 190.76 191.929 193.23 179.514C195.699 167.099 201.795 155.696 210.745 146.745C219.696 137.795 231.099 131.699 243.514 129.23C255.929 126.76 268.797 128.028 280.492 132.872C292.186 137.716 302.182 145.919 309.214 156.444C316.246 166.968 320 179.342 320 192C319.981 208.968 313.233 225.236 301.234 237.234C289.236 249.233 272.968 255.981 256 256Z" fill="white"/>
                </svg>
                Lagos

              </span>
              <span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="white"/>
                </svg>

                deji@leapstartlab.com

              </span>
            </div>
       </div>
    </div>
}

