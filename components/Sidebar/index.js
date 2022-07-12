import { motion } from "framer-motion";
import Link from "next/link";
import { Box } from "@mui/material";

const Sidebar = (props) => {
    return (
        <>
            <Box sx={{ position: 'fixed' }} component={motion.div} layoutId='flower'>
                <motion.svg id="Layer_1"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 414.63 840.33"
                    width='100%'
                    height='100%'
                    layout='fill'
                    overflow='visible'

                >
                    <title>sidebar</title>
                    <rect x="201.43" y="414.33" width="11.72" height="426" fill="#0c8252" />
                    <rect x="201.43" y="414.33" width="3.42" height="426" fill="#a5c96e" />
                    <rect x="213.15" y="414.33" width="3.42" height="426" fill="#a5c96e" />
                    <motion.g>
                        < motion.path d="M359.07,603.7c-17.5,11.63-34.27,24.59-52.74,34.42-12.16,6.46-26.76,8.4-40.26,12.36l-3.12.33-4.45.18-3.42.21-2.11.65-2.33-.05-11,.07-6.15-.43-.55-1.35c6.39-2.64,12.76-5.34,19.17-7.9q51.79-20.72,103.6-41.37c2.16-.86,4.34-1.65,6.52-2.47l.42,2.44Z" transform="translate(-4.11 -4.16)" fill="#99a4cd" />
                        < motion.path d="M356.66,594.72,235,643.14C266.82,605.83,309.22,594.17,356.66,594.72Z" transform="translate(-4.11 -4.16)" fill="#4c3a88" />
                        < motion.path d="M378.5,585.86c-21.3,1.91-42.72,3.08-63.85,6.15-32.07,4.67-59,20-81.78,42.55-2.78,2.75-4.92,6.13-7.36,9.22l-1.22,1.57-1.66,1-1.29.53.16.15q-.42,2.81-.82,5.61l.38.18c-.13.3-.24.61-.38.94l43.13.73,4.67-.34,6-1.22,1.35-.22.27.08a27.65,27.65,0,0,0,3.77-.26c33.11-6.88,59.53-25.44,84.14-47.16l-2-.8,0,0-3,0-.6-.53c-17.21,11.42-33.71,24.14-51.88,33.78-11.89,6.31-26.16,8.23-39.39,12.07l-.22-.06-3.07.32-4.37.18-3.37.21-2.08.63-2.29,0-10.83.07-6.06-.42-.54-1.32c6.29-2.59,12.55-5.24,18.86-7.76q51-20.34,101.91-40.6c2.13-.85,4.28-1.62,6.42-2.43l.42,2.39h0l-3.51,2.86.6.53h3l0,0,2,.8.12-.19,4.12-3.54,0,0c.53-.46,1.06-.92,1.6-1.37l2-1.6,13.2-11C381.58,586.62,380,585.73,378.5,585.86ZM235,643.14c31.83-37.31,74.23-49,121.67-48.42Z" transform="translate(-4.11 -4.16)" fill="#1f776f" />
                    </motion.g>
                    <motion.g>
                        < motion.path d="M359.07,470.16c-17.5,11.62-34.27,24.59-52.74,34.41-12.16,6.46-26.76,8.4-40.26,12.36l-3.12.33-4.45.18-3.42.21-2.11.65-2.33,0-11,.07-6.15-.42-.55-1.36c6.39-2.64,12.76-5.33,19.17-7.9q51.79-20.72,103.6-41.36c2.16-.86,4.34-1.66,6.52-2.48l.42,2.44Z" transform="translate(-4.11 -4.16)" fill="#99a4cd" />
                        < motion.path d="M356.66,461.17,235,509.59C266.82,472.28,309.22,460.62,356.66,461.17Z" transform="translate(-4.11 -4.16)" fill="#4c3a88" />
                        < motion.path d="M378.5,452.32c-21.3,1.9-42.72,3.07-63.85,6.14-32.07,4.67-59,20-81.78,42.55-2.78,2.75-4.92,6.13-7.36,9.22l-1.22,1.57-1.66,1-1.29.53.16.16q-.42,2.79-.82,5.6l.38.18c-.13.3-.24.61-.38.94l43.13.73,4.67-.34,6-1.21,1.35-.23.27.08a27.65,27.65,0,0,0,3.77-.26C313,512.08,339.39,493.52,364,471.8l-2-.8,0,0h-3l-.6-.53c-17.21,11.41-33.71,24.13-51.88,33.78-11.89,6.3-26.16,8.22-39.39,12.07l-.22-.07-3.07.32-4.37.18L256,517l-2.08.63-2.29-.05-10.83.07-6.06-.42-.54-1.32c6.29-2.59,12.55-5.24,18.86-7.76q51-20.33,101.91-40.6c2.13-.85,4.28-1.62,6.42-2.43l.42,2.39h0l-3.51,2.86.6.53,3,0,0,0,2,.8.12-.19,4.12-3.54,0,0,1.6-1.37,2-1.59L385,454C381.58,453.07,380,452.18,378.5,452.32ZM235,509.59c31.83-37.31,74.23-49,121.67-48.42Z" transform="translate(-4.11 -4.16)" fill="#1f776f" />
                    </motion.g>
                    <motion.g>
                        < motion.path d="M67.15,602.46c17.5,11.63,34.27,24.6,52.75,34.42,12.15,6.46,26.75,8.4,40.26,12.36l3.11.33,4.45.18,3.43.21,2.11.65,2.32-.05,11,.07,6.16-.43.54-1.35c-6.39-2.64-12.75-5.33-19.17-7.9q-51.78-20.72-103.59-41.36c-2.16-.87-4.35-1.66-6.52-2.48-.15.81-.29,1.62-.43,2.44Z" transform="translate(-4.11 -4.16)" fill="#99a4cd" />
                        < motion.path d="M69.56,593.48,191.23,641.9C159.41,604.59,117,592.93,69.56,593.48Z" transform="translate(-4.11 -4.16)" fill="#4c3a88" />
                        < motion.path d="M47.72,584.63c21.3,1.9,42.72,3.07,63.86,6.14,32.07,4.67,59,20,81.77,42.55,2.78,2.75,4.92,6.13,7.36,9.22l1.22,1.57,1.66,1,1.3.53-.16.16.81,5.6-.37.18.37.94-43.13.73-4.66-.34-6-1.21-1.35-.23-.28.08a27.65,27.65,0,0,1-3.77-.26c-33.1-6.88-59.53-25.44-84.13-47.16l2-.8,0,0h3l.6-.53c17.21,11.41,33.72,24.13,51.89,33.78,11.89,6.3,26.16,8.22,39.38,12.07l.22-.07,3.07.32,4.38.18,3.37.21,2.07.63,2.29,0,10.84.07,6.05-.42.54-1.32c-6.28-2.59-12.55-5.24-18.86-7.76q-50.94-20.33-101.91-40.6c-2.12-.85-4.27-1.62-6.41-2.43l-.42,2.39h0l3.5,2.86-.6.53-3,0,0,0-2,.8-.13-.19L58,600.25l0,0-1.59-1.37-2-1.59-13.2-11C44.65,585.38,46.23,584.49,47.72,584.63ZM191.23,641.9c-31.82-37.31-74.23-49-121.67-48.42Z" transform="translate(-4.11 -4.16)" fill="#1f776f" />
                    </motion.g>
                    <motion.g>
                        < motion.path d="M67.15,470.16c17.5,11.62,34.27,24.59,52.75,34.41,12.15,6.46,26.75,8.4,40.26,12.36l3.11.33,4.45.18,3.43.21,2.11.65,2.32,0,11,.07,6.16-.42.54-1.36c-6.39-2.64-12.75-5.33-19.17-7.9q-51.78-20.72-103.59-41.36c-2.16-.86-4.35-1.66-6.52-2.48-.15.81-.29,1.63-.43,2.44Q65.38,468.69,67.15,470.16Z" transform="translate(-4.11 -4.16)" fill="#99a4cd" />
                        < motion.path d="M69.56,461.17l121.67,48.42C159.41,472.28,117,460.62,69.56,461.17Z" transform="translate(-4.11 -4.16)" fill="#4c3a88" />
                        < motion.path d="M47.72,452.32c21.3,1.9,42.72,3.07,63.86,6.14,32.07,4.67,59,20,81.77,42.55,2.78,2.75,4.92,6.13,7.36,9.22l1.22,1.57,1.66,1,1.3.53-.16.16.81,5.6-.37.18.37.94-43.13.73-4.66-.34-6-1.21-1.35-.23-.28.08a27.65,27.65,0,0,1-3.77-.26c-33.1-6.88-59.53-25.44-84.13-47.16l2-.8,0,0h3l.6-.53c17.21,11.41,33.72,24.13,51.89,33.78,11.89,6.3,26.16,8.22,39.38,12.07l.22-.07,3.07.32,4.38.18,3.37.21,2.07.63,2.29-.05,10.84.07,6.05-.42.54-1.32c-6.28-2.59-12.55-5.24-18.86-7.76q-50.94-20.33-101.91-40.6c-2.12-.85-4.27-1.62-6.41-2.43l-.42,2.39h0l3.5,2.86-.6.53-3,0,0,0-2,.8-.13-.19L58,467.94l0,0-1.59-1.37-2-1.59c-4-3.31-7.93-6.62-13.2-11C44.65,453.07,46.23,452.18,47.72,452.32Zm143.51,57.27c-31.82-37.31-74.23-49-121.67-48.42Z" transform="translate(-4.11 -4.16)" fill="#1f776f" />
                    </motion.g>
                    <motion.g
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1, rotate: 360, transition: { duration: 50 } }}
                    >
                        {/* -----------------------------------Home Petal----------------------------------- */}
                        <Link href='/'>
                            <motion.g
                                whileHover={{
                                    // y: -100,
                                    // scale: 1.5,
                                    // transition: { duration: 1 },
                                    cursor: 'pointer'
                                }}>
                                < motion.path d="M238.79,14.18c10.38,10,17.77,19.7,10.89,45.67l-15.4,57.61a94.92,94.92,0,0,0-21.36-2.72h-3a95.3,95.3,0,0,0-21.33,2.72l-15.4-57.55c-6.88-26,.52-35.69,10.89-45.69,6.85-6.57,16.31-10.06,27.37-10.06S231.94,7.6,238.79,14.18Z" transform="translate(-4.11 -4.16)" fill="#ec5aa0" />
                                < motion.path d="M220.68,90.94H200.61V86.26h7.44V83.77h-7.44V79.09h20.07v4.68H211.1v2.49h9.58Z" transform="translate(-4.11 -4.16)" fill="#fff" />
                                < motion.path d="M216.59,67.09c3,0,4.29,2.53,4.29,5.38s-1.3,5.39-4.29,5.39H208.9c-2.91,0-4.54-1.92-4.54-5.39s1.63-5.38,4.54-5.38Zm.23,6.31c.59,0,1.13-.22,1.13-.93s-.54-.93-1.13-.93h-8.4c-.6,0-1.13.23-1.13.93s.53.93,1.13.93Z" transform="translate(-4.11 -4.16)" fill="#fff" />
                                < motion.path d="M206.7,61.51v-.06a3,3,0,0,1-2.34-3.1,2.68,2.68,0,0,1,2.34-2.91v0a2.93,2.93,0,0,1-2.34-3.08c0-2.22,1.43-2.93,3.41-2.93h12.91v4.29H209.49c-.71,0-1.47,0-1.47.9s.76.87,1.47.87h11.19v4.29H209.49c-.71,0-1.47.06-1.47.9s.76.88,1.47.88h11.19v4.28H204.55V61.51Z" transform="translate(-4.11 -4.16)" fill="#fff" />
                                < motion.path d="M213.12,43.63h3.28c1,0,1.55-.34,1.55-.93s-.59-.93-1.55-.93h-2.09V37.32h2.37c3,0,4.2,2.25,4.2,5.38,0,2.85-1.3,5.39-4.29,5.39H208.9c-2.91,0-4.54-1.92-4.54-5.39,0-2.85,1.07-5.38,4.54-5.38h4.22Zm-2.67-1.86h-2.2a.93.93,0,1,0,0,1.86h2.2Z" transform="translate(-4.11 -4.16)" fill="#fff" />
                            </motion.g>
                        </Link>

                        {/* -----------------------------------About Petal----------------------------------- */}
                        <Link href='/about'>
                            <motion.g
                                whileHover={{
                                    // x: 120,
                                    // scale: 1.5,
                                    // transition: { duration: 1 },
                                    cursor: 'pointer'
                                }}>
                                < motion.path d="M408.68,184.07c6.58,6.84,10.06,16.31,10.06,27.36s-3.53,20.52-10.06,27.36c-10,10.38-19.69,17.78-45.67,10.9L305.4,234.28A95.89,95.89,0,0,0,308.12,213v-3a96,96,0,0,0-2.72-21.35L363,173.19C389,166.3,398.69,173.69,408.68,184.07Z" transform="translate(-4.11 -4.16)" fill="#febe4e" />
                                < motion.path d="M343.5,198.39l2.59,20.08h-4.65l-.54-4.94h-2.54l-.76,4.94h-4l3.42-20.08Zm-2.94,12.1-.81-8.94h-.06l-.82,8.94Z" transform="translate(-4.11 -4.16)" fill="#fff" />
                                < motion.path d="M347,198.39h4.46v6.15h.06a3.08,3.08,0,0,1,3.15-2.4c2.26,0,3.11,1.52,3.11,3.58v8.91c0,2-.74,4-3.19,4-1.64,0-2.85-.62-3.07-2.22h-.06v2H347Zm4.46,15.51c0,.7.39,1.1.93,1.1s.93-.4.93-1.1v-7c0-.71-.39-1.1-.93-1.1s-.93.39-.93,1.1Z" transform="translate(-4.11 -4.16)" fill="#fff" />
                                < motion.path d="M369.83,214.38c0,3-2.54,4.28-5.39,4.28s-5.39-1.29-5.39-4.28v-7.7c0-2.9,1.92-4.54,5.39-4.54s5.39,1.64,5.39,4.54Zm-6.32.22c0,.6.22,1.13.93,1.13s.93-.53.93-1.13v-8.4c0-.59-.23-1.13-.93-1.13s-.93.54-.93,1.13Z" transform="translate(-4.11 -4.16)" fill="#fff" />
                                < motion.path d="M377.38,216.46h-.06a3,3,0,0,1-3.24,2.2c-2,0-3-1.38-3-3.69V202.34h4.46v11.19c0,.71.05,1.47.9,1.47s1-.76,1-1.47V202.34h4.45v16.13h-4.45Z" transform="translate(-4.11 -4.16)" fill="#fff" />
                                < motion.path d="M382.68,205.27v-2.93h1.49v-2.91h4.46v2.91h1.94v2.93h-1.94v8.8c0,1,0,1.46,1.07,1.46h.87v2.94h-3.64c-2.22,0-2.76-1.24-2.76-3.36v-9.84Z" transform="translate(-4.11 -4.16)" fill="#fff" />
                            </motion.g>
                        </Link>

                        {/* -----------------------------------Other Petals----------------------------------- */}
                        < motion.path d="M99.28,102.52l42.28,42.16a97.2,97.2,0,0,0-11.08,14.09l-.1.14c-.36.57-.71,1.18-1.07,1.7l-.26.42c-.36.59-.71,1.17-1.06,1.8l-.19.31a95.91,95.91,0,0,0-7,15v.14c-.22.62-.45,1.18-.66,1.84a1.71,1.71,0,0,1-.15.47c-.18.53-.35,1.05-.52,1.59-.08.24-.16.49-.23.73-.14.46-.28.91-.41,1.37l-57.7-15.52C35.13,161.72,30.43,150.48,27,136.5c-2.28-9.22-.57-19.16,5-28.73s13.28-16,22.39-18.65C68.13,85.11,80.23,83.56,99.28,102.52Z" transform="translate(-4.11 -4.16)" fill="#524fa1" />
                        < motion.path d="M141.51,278.18,99.28,320.35c-19,18.95-31.15,17.4-45,13.41-9.12-2.64-16.87-9.1-22.39-18.67s-7.22-19.51-5-28.73c3.47-14,8.22-25.23,34.07-32.27l57.65-15.49h0c.13.45.27.89.41,1.35.07.25.15.51.23.75.17.53.34,1.05.52,1.58a1.59,1.59,0,0,0,.16.48c.21.61.43,1.17.65,1.82a.43.43,0,0,0,0,.16,97.32,97.32,0,0,0,20.79,33.43Z" transform="translate(-4.11 -4.16)" fill="#2db6ea" />
                        < motion.path d="M249.68,363c6.88,26-.51,35.69-10.89,45.67-6.85,6.59-16.31,10.07-27.36,10.07s-20.52-3.52-27.37-10.07c-10.37-10-17.77-19.68-10.89-45.67l15.4-57.61a95.86,95.86,0,0,0,20.51,2.68h4.7a95.76,95.76,0,0,0,20.5-2.68Z" transform="translate(-4.11 -4.16)" fill="#1aaf69" />
                        < motion.path d="M168.76,61.08l15.49,57.56a93.21,93.21,0,0,0-9,3.13l-.85.35-.84.35a95.85,95.85,0,0,0-28.93,19L102.51,99.29c-19-19.06-17.4-31.16-13.4-45,2.63-9.13,9.09-16.87,18.66-22.4s19.51-7.22,28.72-5C150.48,30.39,161.73,35.1,168.76,61.08Z" transform="translate(-4.11 -4.16)" fill="#a155a1" />
                        < motion.path d="M391,107.77c5.52,9.57,7.25,19.51,5,28.73-3.46,14-8.17,25.24-34.07,32.27l-57.63,15.48c-.9-3-1.93-6-3.13-9l-.35-.85c-.12-.28-.22-.55-.35-.83a95.85,95.85,0,0,0-19-28.93l42.22-42.16c19-19,31.12-17.41,45-13.4C377.7,91.75,385.44,98.2,391,107.77Z" transform="translate(-4.11 -4.16)" fill="#f78f42" />
                        < motion.path d="M395.93,286.36c2.29,9.22.56,19.16-5,28.73s-13.27,16-22.4,18.67c-13.84,4-25.93,5.54-45-13.41l-42.21-42.17a95.51,95.51,0,0,0,19-28.93c.13-.27.24-.55.35-.83l.36-.85c1.17-2.94,2.23-5.93,3.12-9l57.59,15.48C387.76,261.13,392.47,272.38,395.93,286.36Z" transform="translate(-4.11 -4.16)" fill="#fcef56" />
                        < motion.path d="M333.74,54.29c4,13.84,5.55,25.94-13.4,45l-42.16,42.28a95.51,95.51,0,0,0-28.93-19l-.84-.36-.84-.35q-4.42-1.78-9-3.13l15.49-57.64c7-25.94,18.28-30.65,32.27-34.06,9.22-2.28,19.15-.57,28.73,5S331.11,45.16,333.74,54.29Z" transform="translate(-4.11 -4.16)" fill="#f15a42" />




                        {/* -----------------------------------Portfolio Petal----------------------------------- */}
                        <Link href='/portfolio'>
                            <motion.g
                                whileHover={{
                                    // y: 120,
                                    // x: 60,
                                    // scale: 1.5,
                                    // transition: { duration: 1 },
                                    cursor: 'pointer'
                                }}>
                                < motion.path d="M320.34,323.58c19,19.06,17.4,31.15,13.4,45-2.63,9.12-9.08,16.87-18.65,22.39s-19.51,7.25-28.73,5c-14-3.47-25.24-8.22-32.27-34.06L238.6,304.23q4.26-1.28,8.42-2.93l1-.4.62-.26c1-.42,2.06-.87,3.07-1.32s1.74-.8,2.6-1.18h0a95.43,95.43,0,0,0,23.83-16.69Z" transform="translate(-4.11 -4.16)" fill="#a2cf62" />
                                < motion.path d="M322.73,371.92l-16.44,11.52L303,378.75c-2.13-3.05-2.81-5.5,0-7.49l3-2.1c2.47-1.73,5.1-.3,6.68,2l1,1.41,6.35-4.45Zm-11.39,2.26-.42-.6c-.94-1.34-1.74-.91-3.68.45s-2.64,2-1.7,3.32l.42.6Z" transform="translate(-4.11 -4.16)" fill="#fff" />
                                < motion.path d="M305.7,354.73c2.45-1.72,5-.38,6.6,1.95s2,5.16-.42,6.87l-6.3,4.42c-2.38,1.66-4.82,1-6.81-1.81s-1.75-5.35.63-7Zm3.81,5c.49-.34.8-.83.39-1.41s-1-.45-1.46-.11l-6.88,4.82c-.48.34-.79.83-.39,1.41s1,.45,1.46.11Z" transform="translate(-4.11 -4.16)" fill="#fff" />
                                < motion.path d="M294.31,355.76l-.05-.07a3.32,3.32,0,0,1-3.74-1.31c-1.29-1.85-.5-3.33.86-4.28l4.71-3.3,2.56,3.65-3.21,2.24c-.54.38-1,.93-.56,1.53s1.09.37,1.62,0l9.29-6.5,2.55,3.65-13.21,9.25L292.58,357Z" transform="translate(-4.11 -4.16)" fill="#fff" />
                                < motion.path d="M290.87,349.42l-2.4,1.68-.86-1.22-2.38,1.67-2.55-3.65,2.38-1.67-1.12-1.59,2.4-1.69,1.12,1.6,7.21-5.05c.78-.55,1.18-.86.58-1.72l-.5-.71,2.4-1.68,2.09,3c1.28,1.83.57,3-1.16,4.19L290,348.2Z" transform="translate(-4.11 -4.16)" fill="#fff" />
                                < motion.path d="M286.1,342.61l-2.4,1.68-.57-.81-.85.6a2.8,2.8,0,0,1-4-.69l-1.63-2.33,2.4-1.68c.63.9,1,.83,1.56.46l-.73-1,2.4-1.69.73,1,10.81-7.57,2.56,3.65-10.81,7.57Z" transform="translate(-4.11 -4.16)" fill="#fff" />
                                < motion.path d="M283,322.24c2.45-1.72,5-.38,6.6,1.95s2,5.16-.42,6.87l-6.3,4.42c-2.38,1.66-4.82,1-6.81-1.81s-1.75-5.35.63-7Zm3.81,5c.49-.34.8-.83.39-1.41s-1-.45-1.46-.11l-6.88,4.82c-.48.34-.79.83-.39,1.41s1,.45,1.46.11Z" transform="translate(-4.11 -4.16)" fill="#fff" />
                                < motion.path d="M285.58,318.85l-16.45,11.52-2.55-3.65L283,315.2Z" transform="translate(-4.11 -4.16)" fill="#fff" />
                                < motion.path d="M268.17,324l-2.34,1.64L263.28,322l2.33-1.63Zm14.11-9.88-13.21,9.25-2.56-3.65,13.21-9.25Z" transform="translate(-4.11 -4.16)" fill="#fff" />
                                < motion.path d="M269.47,303c2.45-1.72,5-.38,6.6,1.95s2,5.16-.42,6.87l-6.31,4.42c-2.38,1.66-4.82,1-6.81-1.81s-1.75-5.35.63-7Zm3.81,5c.48-.34.79-.83.39-1.41s-1-.45-1.46-.11l-6.88,4.82c-.49.34-.8.83-.39,1.41s1,.45,1.45.11Z" transform="translate(-4.11 -4.16)" fill="#fff" />
                            </motion.g>
                        </Link>





                        {/* -----------------------------------Engineering Petal----------------------------------- */}
                        <Link href='/engineering'>
                            <motion.g
                                whileHover={{
                                    // y: 120,
                                    // x: -60,
                                    // scale: 1.5,
                                    // transition: { duration: 1 },
                                    cursor: 'pointer'
                                }}>
                                < motion.path d="M184.25,304.23l-15.48,57.55c-7.05,25.94-18.29,30.65-32.28,34.07-9.21,2.27-19.15.56-28.72-5s-16-13.28-18.66-22.39c-4-13.85-5.55-25.95,13.4-45l42.16-42.29a95.84,95.84,0,0,0,29.51,19.27l.65.27,1,.37A65.51,65.51,0,0,0,184.25,304.23Z" transform="translate(-4.11 -4.16)" fill="#01b5ac" />
                                < motion.path d="M118.76,384.1l-13.57-7.84,3.79-6.55L111,370.9l-2,3.39,3,1.72,1.89-3.28,2.06,1.19-1.89,3.27,4.42,2.56,2-3.4,2.06,1.19Z" transform="translate(-4.11 -4.16)" fill="#fff" />
                                < motion.path d="M115.05,368.49l0,0a2.35,2.35,0,0,1-.22-3.05c.78-1.35,2.11-1.5,3.67-.6l8.54,4.93-1.74,3-7.57-4.37c-.47-.27-1-.53-1.34,0s.14.95.62,1.22l7.56,4.37-1.74,3L112,370.72l1.74-3Z" transform="translate(-4.11 -4.16)" fill="#fff" />
                                < motion.path d="M130.69,361c3,1.75,2.12,4.39,1.35,5.73-1.33,2.3-3.21,2.9-4.37,2.23l-1.06-.62,1.73-3,.73.42a.73.73,0,1,0,.72-1.26l-2.7-1.56,0,.06a2.06,2.06,0,0,1,.54,2.75c-1,1.77-2.54,1.71-4.12.8L119,364c-1.73-1-2-2.39-1.38-3.42a2.53,2.53,0,0,1,2.84-1.36l0,0-1.41-.82,1.75-3Zm-6,2.21c.4.23.89.34,1.18-.16s-.06-.87-.46-1.1l-3.12-1.8c-.4-.23-.9-.34-1.19.15s.06.88.46,1.11Z" transform="translate(-4.11 -4.16)" fill="#fff" />
                                < motion.path d="M120.59,354l-1.92-1.11,1.74-3,1.92,1.12Zm11.65,6.72-10.9-6.29,1.74-3,10.9,6.3Z" transform="translate(-4.11 -4.16)" fill="#fff" />
                                < motion.path d="M126.66,348.37l0,0a2.38,2.38,0,0,1-.22-3.05c.78-1.35,2.11-1.5,3.68-.6l8.53,4.93-1.74,3-7.56-4.37c-.48-.27-1-.53-1.34,0s.14.95.61,1.22l7.57,4.37-1.74,3-10.9-6.29,1.74-3Z" transform="translate(-4.11 -4.16)" fill="#fff" />
                                < motion.path d="M135.79,342.81l2.21,1.28c.65.38,1.18.38,1.41,0s0-.86-.69-1.24l-1.41-.81,1.74-3,1.6.92c2.06,1.19,2,3.17.74,5.28-1.11,1.93-3,3.14-5,2l-5.2-3c-2-1.14-2.32-3.07-1-5.41,1.11-1.93,2.83-3.23,5.17-1.87l2.86,1.65Zm-1.09-2.3-1.48-.86a.66.66,0,0,0-1,.26.65.65,0,0,0,.28,1l1.49.86Z" transform="translate(-4.11 -4.16)" fill="#fff" />
                                < motion.path d="M140.47,334.7l2.21,1.27c.65.38,1.18.38,1.41,0s0-.86-.68-1.23L142,333.9l1.74-3,1.6.93c2.06,1.18,2,3.16.74,5.28-1.12,1.92-3,3.13-5,2l-5.2-3c-2-1.13-2.32-3.07-1-5.41,1.11-1.93,2.83-3.22,5.17-1.87l2.86,1.65Zm-1.08-2.3-1.49-.86a.66.66,0,0,0-1,.25.67.67,0,0,0,.29,1l1.48.85Z" transform="translate(-4.11 -4.16)" fill="#fff" />
                                < motion.path d="M140.8,324.06l0-.05a2.59,2.59,0,0,1-.31-3.08,2.2,2.2,0,0,1,3.31-.81l3.89,2.25-1.74,3-2.65-1.53c-.44-.25-1-.38-1.26.11s.1.89.54,1.15l7.66,4.42-1.74,3-10.9-6.29,1.74-3Z" transform="translate(-4.11 -4.16)" fill="#fff" />
                                < motion.path d="M141.58,317.68l-1.92-1.11,1.74-3,1.92,1.11Zm11.64,6.73-10.89-6.3,1.73-3,10.9,6.3Z" transform="translate(-4.11 -4.16)" fill="#fff" />
                                < motion.path d="M147.65,312l0,0a2.37,2.37,0,0,1-.22-3.05c.78-1.35,2.11-1.5,3.67-.6l8.54,4.93-1.74,3-7.56-4.37c-.48-.27-1-.53-1.35,0s.14.95.62,1.22l7.57,4.37-1.74,3-10.9-6.29,1.74-3Z" transform="translate(-4.11 -4.16)" fill="#fff" />
                                < motion.path d="M163.3,304.54c3,1.75,2.11,4.39,1.34,5.73-1.33,2.3-3.2,2.9-4.36,2.23l-1.07-.62,1.74-3,.72.42a.73.73,0,1,0,.73-1.26l-2.71-1.56,0,.06a2,2,0,0,1,.54,2.75c-1,1.77-2.53,1.71-4.12.8l-4.45-2.58c-1.74-1-2-2.38-1.39-3.41a2.54,2.54,0,0,1,2.84-1.36l0,0-1.41-.81,1.75-3Zm-6,2.21c.4.23.9.34,1.18-.16s0-.87-.45-1.1l-3.13-1.8c-.4-.23-.9-.34-1.18.15s.06.87.46,1.1Z" transform="translate(-4.11 -4.16)" fill="#fff" />
                            </motion.g>
                        </Link>

                        {/* -----------------------------------Contact Petal----------------------------------- */}
                        <Link href='/contact'>
                            <motion.g
                                whileHover={{
                                    // x: -120,
                                    // scale: 1.5,
                                    // transition: { duration: 1 },
                                    cursor: 'pointer'
                                }}>
                                < motion.path d="M117.52,188.6l-.33,1.38a3.69,3.69,0,0,1-.15.72c-.13.55-.25,1.17-.35,1.67a.74.74,0,0,1-.1.45c-.13.65-.24,1.3-.36,2v.12a96.76,96.76,0,0,0,0,33.09v.11l.36,2a.71.71,0,0,0,.1.44c.1.57.23,1.18.35,1.68a3.6,3.6,0,0,0,.15.71l.33,1.4L59.91,249.69c-26,6.88-35.69-.52-45.67-10.9C7.59,232,4.11,222.48,4.11,211.43s3.52-20.52,10.07-27.36c10-10.38,19.68-17.77,45.67-10.88Z" transform="translate(-4.11 -4.16)" fill="#2086c6" />
                                < motion.path d="M34.38,210.66v2.65c0,3.75-2,5.55-6,5.55-3.1,0-5.9-1.27-5.9-5.86v-9.14c0-4.6,2.8-5.87,5.9-5.87,3.41,0,6,1,6,5.36v2.2H29.7v-2.76c0-.82-.26-1.58-1.27-1.58s-1.22.76-1.22,1.58v11.28c0,.82.26,1.58,1.22,1.58s1.27-.76,1.27-1.58l0-3.41Z" transform="translate(-4.11 -4.16)" fill="#fff" />
                                < motion.path d="M46.39,214.38c0,3-2.54,4.28-5.39,4.28s-5.39-1.29-5.39-4.28v-7.7c0-2.9,1.92-4.54,5.39-4.54s5.39,1.64,5.39,4.54Zm-6.32.22c0,.6.22,1.13.93,1.13s.93-.53.93-1.13v-8.4c0-.59-.23-1.13-.93-1.13s-.93.54-.93,1.13Z" transform="translate(-4.11 -4.16)" fill="#fff" />
                                < motion.path d="M52.08,204.34h.06a3,3,0,0,1,3.24-2.2c2,0,3,1.38,3,3.69v12.64H53.94v-11.2c0-.7-.06-1.46-.9-1.46s-1,.76-1,1.46v11.2H47.62V202.34h4.46Z" transform="translate(-4.11 -4.16)" fill="#fff" />
                                < motion.path d="M59.24,205.27v-2.93h1.49v-2.91h4.46v2.91h1.94v2.93H65.19v8.8c0,1,0,1.46,1.07,1.46h.87v2.94H63.5c-2.23,0-2.77-1.24-2.77-3.36v-9.84Z" transform="translate(-4.11 -4.16)" fill="#fff" />
                                < motion.path d="M74.29,216.58h-.05a3.17,3.17,0,0,1-3.13,2.08c-2,0-3.13-1.18-3.13-3.3V213c0-4.23,6.31-3.72,6.31-6.71,0-.65-.19-1.19-.93-1.19s-.93.54-.93,1.19V208H68v-1.49c0-3.24,2.7-4.4,5.38-4.4s5.39,1.16,5.39,4.4v11.93H74.29Zm-1.86-2.26a.79.79,0,0,0,.82.85c.93,0,1-.62,1-2.06v-2.79c-.87.62-1.86,1-1.86,2.25Z" transform="translate(-4.11 -4.16)" fill="#fff" />
                                < motion.path d="M86.3,206.2c0-.59-.22-1.13-.93-1.13s-.93.54-.93,1.13v8.4c0,.6.23,1.13.93,1.13s.93-.53.93-1.13v-2.51h4.46v2.37c0,3-2.26,4.2-5.42,4.2-3.32,0-5.35-1.38-5.35-4.48v-7.53c0-2.65,2-4.51,5.35-4.51,2.88,0,5.42,1.07,5.42,4.54V208H86.3Z" transform="translate(-4.11 -4.16)" fill="#fff" />
                                < motion.path d="M91.6,205.27v-2.93h1.49v-2.91h4.46v2.91h2v2.93h-2v8.8c0,1,0,1.46,1.07,1.46h.88v2.94H95.86c-2.23,0-2.77-1.24-2.77-3.36v-9.84Z" transform="translate(-4.11 -4.16)" fill="#fff" />
                            </motion.g>
                        </Link>
                    </motion.g>
                    {/* -----------------------------------Face----------------------------------- */}
                    <motion.g>
                        < motion.path d="M245.6,157.55c.93,2.82.19,5.59-1.64,6.19s-4.08-1.17-5-4-.19-5.6,1.65-6.21S244.67,154.73,245.6,157.55Z" transform="translate(-4.11 -4.16)" fill="#fff" />
                        < motion.path d="M302.92,197.63a92.58,92.58,0,0,1,0,27.61,5.06,5.06,0,0,1-.08.52l-.21,1.3-.25,1.37a2.77,2.77,0,0,1-.09.47c-.43,2.17-.92,4.33-1.49,6.48-.39,1.47-.83,2.91-1.28,4.36l-.08.21c-.17.56-.36,1.17-.56,1.68s-.25.73-.38,1.09-.17.48-.27.73a93,93,0,0,1-54.79,54.8l-.73.25-1.08.39-1.68.57-.22.07-2.13.64c-.74.23-1.48.44-2.23.64q-3.23.85-6.5,1.49l-.43.08-1.41.25-1.25.21-.57.09a93.47,93.47,0,0,1-13.78,1c-1.6,0-3.18,0-4.76-.11-3-.16-6-.47-9-.91l-.58-.09-1.24-.2-1.42-.26-.42-.08q-3.27-.63-6.51-1.49c-1.47-.4-2.91-.83-4.36-1.28l-.22-.09-1.67-.55-1.09-.39-.72-.25a92.55,92.55,0,0,1-60.49-86.82c0-2.28.09-4.56.26-6.82A92.44,92.44,0,0,1,164.06,132c.47-.28.95-.57,1.43-.84l.76-.44,1.79-1,.62-.33c.78-.41,1.57-.8,2.35-1.18l.6-.28,1.86-.85.81-.36c.62-.28,1.25-.54,1.89-.81l.6-.24c.82-.33,1.63-.65,2.46-1l.65-.23,1.92-.67.82-.27,2-.63.58-.18c.85-.25,1.69-.48,2.55-.71l.69-.17c.65-.18,1.29-.33,1.95-.48l.84-.19c.7-.17,1.41-.32,2.12-.46l.51-.11,2.6-.45.74-.12,2-.29.83-.11,2.25-.26h.43l2.65-.21h.77l2-.09h6.59l2.07.09h.69a27,27,0,0,1,2.7.22h.32l2.35.27.75.11c.71.09,1.4.19,2.11.3l.62.1c.89.15,1.78.3,2.68.48l.34.07c.77.15,1.55.32,2.35.49l.71.17,2.13.52.54.14c.88.23,1.76.48,2.63.74l.36.1c.76.22,1.5.46,2.25.71l.67.22c.71.23,1.42.49,2.13.75l.45.15c.86.32,1.72.66,2.57,1l.38.16c.71.29,1.43.6,2.15.91l.62.27,2.13,1,.35.18c.83.4,1.67.81,2.49,1.24l.39.2c.68.37,1.36.73,2,1.18l.59.33,1.78,1a93.12,93.12,0,0,1,39.18,47.28c.09.24.17.48.27.73s.26.72.37,1.08c.2.56.39,1.17.57,1.68l.07.22c.46,1.44.89,2.89,1.28,4.36.58,2.15,1.08,4.3,1.49,6.47a.91.91,0,0,0,.09.48l.25,1.37.21,1.29A2.06,2.06,0,0,1,302.92,197.63Zm-22.32,4,.25-1.58-1.47-.63c-.29-.13-29.65-12.51-68.74-12.51s-68.45,12.38-68.75,12.51l-1.46.63.24,1.58c5.65,36.3,35.11,75.17,70,75.17s64.33-38.87,70-75.17Zm-28-26.86c4-2.45,4.38-9.32.74-15.35s-9.88-8.91-13.93-6.46-4.39,9.33-.75,15.35,9.9,8.92,13.95,6.46Zm-70-6.46c3.64-6,3.31-12.92-.74-15.35s-10.29.45-13.94,6.46-3.31,12.92.75,15.35,10.3-.44,13.94-6.46Z" transform="translate(-4.11 -4.16)" fill="#fcee23" />
                        < motion.path d="M280.86,200l-.24,1.58c-5.65,36.3-35.11,75.17-70,75.17s-64.33-38.88-70-75.17l-.24-1.58,1.47-.63c.29-.13,29.64-12.51,68.75-12.51s68.44,12.38,68.73,12.51Zm-27.52,50.19a100.22,100.22,0,0,0,22.94-47.66,191.65,191.65,0,0,0-131.26,0A100.19,100.19,0,0,0,168,250.19c12.7,14.46,27.86,22.43,42.7,22.43S240.64,264.69,253.34,250.19Z" transform="translate(-4.11 -4.16)" fill="#231f20" />
                        < motion.path d="M276.28,202.56a100.26,100.26,0,0,1-22.94,47.63c-12.7,14.46-27.86,22.43-42.68,22.43s-30-7.93-42.69-22.43A100.21,100.21,0,0,1,145,202.52a191.65,191.65,0,0,1,131.26,0Z" transform="translate(-4.11 -4.16)" fill="#ed2025" />
                        < motion.path d="M253.34,159.37c3.64,6,3.31,12.92-.74,15.35s-10.29-.44-13.94-6.46-3.31-12.92.75-15.35S249.7,153.36,253.34,159.37Zm-1,13.93c1.35-.44,1.92-2.35,1.29-4.33s-2.26-3.16-3.62-2.73-1.93,2.35-1.29,4.34,2.27,3.17,3.62,2.72ZM244,163.74c1.83-.6,2.57-3.37,1.64-6.19s-3.16-4.62-5-4-2.58,3.39-1.65,6.21,3.17,4.61,5,4Z" transform="translate(-4.11 -4.16)" fill="#231f20" />
                        < motion.path d="M253.72,169c.63,1.95.06,3.89-1.3,4.33s-3-.77-3.61-2.72-.06-3.89,1.29-4.34S253,167,253.72,169Z" transform="translate(-4.11 -4.16)" fill="#fff" />
                        < motion.path d="M181.91,152.91c4.05,2.46,4.38,9.33.74,15.35s-9.88,8.92-13.93,6.46-4.39-9.32-.75-15.35S177.86,150.46,181.91,152.91Zm.45,6.83c.93-2.82.19-5.6-1.65-6.21s-4.07,1.18-5,4-.19,5.59,1.65,6.19,4.07-1.19,5-4Zm-9.8,10.84c.65-2,.06-3.89-1.29-4.34s-3,.78-3.61,2.73,0,3.89,1.3,4.33,3-.77,3.6-2.72Z" transform="translate(-4.11 -4.16)" fill="#231f20" />
                        < motion.path d="M180.71,153.53c1.84.61,2.58,3.39,1.65,6.21s-3.16,4.61-5,4-2.58-3.37-1.65-6.19S178.88,152.93,180.71,153.53Z" transform="translate(-4.11 -4.16)" fill="#fff" />
                        < motion.path d="M171.27,166.24c1.35.45,1.94,2.35,1.29,4.34s-2.25,3.17-3.6,2.72S167,171,167.66,169,169.92,165.81,171.27,166.24Z" transform="translate(-4.11 -4.16)" fill="#fff" />
                    </motion.g>
                </motion.svg>

            </Box>

        </>
    )
};
export default Sidebar;