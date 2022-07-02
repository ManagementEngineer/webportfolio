import { AnimateSharedLayout, LayoutGroup, motion } from 'framer-motion'

const MurakamiFlower = () => {
    const transition = { duration: 5, ease: "easeInOut" };
    return (

        <svg xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 360 360"
            height="460"
            width="460"
            overflow='visible'
        >
            <title>Asset 13</title>
            <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">


                    <motion.g
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1, rotate: 360, transition: { duration: 30 } }}>
                        {/* ----------------------------Home Petal---------------------------- */}
                        <motion.g
                            whileHover={{
                                y: -120,
                                scale: 2,
                                transition: { duration: 1 },
                            }}>
                            <motion.path d="M203.29,12.07c8.84,8.51,15.13,16.77,9.27,38.88L199.45,100a80.79,80.79,0,0,0-18.18-2.32H178.7A81.19,81.19,0,0,0,160.54,100L147.43,51c-5.86-22.12.44-30.38,9.27-38.89,5.83-5.6,13.88-8.57,23.3-8.57S197.46,6.47,203.29,12.07Z" fill="#ec5aa0" />
                            <motion.path d="M185.46,73.68H168.37v-4h6.33V67.59h-6.33v-4h17.09v4h-8.17V69.7h8.17Z" fill="#fff" />
                            <motion.path d="M182,53.38c2.55,0,3.65,2.16,3.65,4.58s-1.1,4.59-3.65,4.59h-6.55c-2.47,0-3.86-1.63-3.86-4.59s1.39-4.58,3.86-4.58Zm.2,5.38c.5,0,1-.2,1-.8s-.46-.79-1-.79H175c-.5,0-1,.19-1,.79s.46.8,1,.8Z" fill="#fff" />
                            <motion.path d="M173.55,48.63v-.05a2.55,2.55,0,0,1-2-2.64,2.27,2.27,0,0,1,2-2.47v0a2.49,2.49,0,0,1-2-2.62c0-1.89,1.22-2.49,2.9-2.49h11V42h-9.53c-.6,0-1.25,0-1.25.76s.65.75,1.25.75h9.53v3.65h-9.53c-.6,0-1.25,0-1.25.76s.65.75,1.25.75h9.53v3.65H171.73V48.63Z" fill="#fff" />
                            <motion.path d="M179,33.41h2.79c.81,0,1.32-.29,1.32-.79s-.51-.79-1.32-.79H180V28h2c2.59,0,3.57,1.92,3.57,4.58,0,2.42-1.1,4.58-3.65,4.58h-6.55c-2.47,0-3.86-1.63-3.86-4.58,0-2.42.91-4.58,3.86-4.58H179Zm-2.28-1.58h-1.87a.79.79,0,1,0,0,1.58h1.87Z" fill="#fff" />
                        </motion.g>

                        {/* ----------------------------About Petal---------------------------- */}
                        <motion.g
                            whileHover={{
                                x: 120,
                                scale: 2,
                                transition: { duration: 1 },
                            }}>
                            <motion.path d="M348.06,156.71c-8.51-8.84-16.77-15.13-38.89-9.27L260.1,160.55a81.79,81.79,0,0,1,2.32,18.17v.07c0,.4,0,.81,0,1.21s0,.81,0,1.22v.07a81.7,81.7,0,0,1-2.32,18.16l49.08,13.12c22.11,5.86,30.37-.44,38.88-9.28,5.6-5.82,8.56-13.88,8.56-23.29S353.66,162.53,348.06,156.71Z" fill="#febe4e" />
                            <motion.path d="M292.54,169.13l2.21,17.09h-4l-.46-4.2h-2.16l-.64,4.2h-3.36l2.9-17.09Zm-2.49,10.29-.7-7.6h-.05l-.69,7.6Z" fill="#fff" />
                            <motion.path d="M295.57,169.13h3.79v5.23h.05a2.62,2.62,0,0,1,2.68-2c1.92,0,2.64,1.3,2.64,3.05V183c0,1.66-.62,3.43-2.71,3.43-1.39,0-2.42-.52-2.61-1.89h-.05v1.73h-3.79Zm3.79,13.2c0,.6.33.93.79.93s.79-.33.79-.93v-6c0-.6-.33-.94-.79-.94s-.79.34-.79.94Z" fill="#fff" />
                            <motion.path d="M315,182.74c0,2.54-2.16,3.64-4.59,3.64s-4.58-1.1-4.58-3.64v-6.56c0-2.47,1.63-3.86,4.58-3.86s4.59,1.39,4.59,3.86Zm-5.38.19c0,.5.19,1,.79,1s.8-.46.8-1v-7.15c0-.51-.2-1-.8-1s-.79.45-.79,1Z" fill="#fff" />
                            <motion.path d="M321.39,184.51h-.05a2.58,2.58,0,0,1-2.76,1.87c-1.7,0-2.57-1.17-2.57-3.14V172.49h3.79V182c0,.6.05,1.24.77,1.24s.82-.64.82-1.24v-9.53h3.79v13.73h-3.79Z" fill="#fff" />
                            <motion.path d="M325.9,175v-2.49h1.27V170H331v2.47h1.66V175H331v7.49c0,.82,0,1.25.92,1.25h.74v2.5h-3.1c-1.89,0-2.35-1.06-2.35-2.86V175Z" fill="#fff" />
                        </motion.g>

                        {/* ----------------------------Portfolio Petal---------------------------- */}
                        <motion.g
                            whileHover={{
                                y: 120,
                                scale: 2,
                                transition: { duration: 1 },
                            }}>
                            <motion.path
                                d="M212.56,309.05,199.45,260A81.47,81.47,0,0,1,182,262.28l-1.6,0h-.81l-1.59,0A81.65,81.65,0,0,1,160.54,260l-13.11,49.08c-5.86,22.12.44,30.38,9.27,38.88,5.83,5.61,13.88,8.57,23.3,8.57s17.46-3,23.29-8.57C212.13,339.43,218.42,331.17,212.56,309.05Z" fill="#1aaf69" />
                            <motion.path d="M186.13,345.28H169v-4.87c0-3.17.72-5.21,3.67-5.21h3.12c2.57,0,3.7,2.28,3.7,4.63v1.46h6.6Zm-9-4v-.62c0-1.39-.77-1.49-2.78-1.49s-2.81.1-2.81,1.49v.62Z" fill="#fff" />
                            <motion.path d="M182.65,325c2.54,0,3.65,2.16,3.65,4.59s-1.11,4.58-3.65,4.58H176.1c-2.47,0-3.87-1.63-3.87-4.58s1.4-4.59,3.87-4.59Zm.19,5.38c.51,0,1-.19,1-.79s-.45-.79-1-.79h-7.15c-.5,0-1,.19-1,.79s.46.79,1,.79Z" fill="#fff" />
                            <motion.path d="M174.2,320.13v-.08a2.81,2.81,0,0,1-2-2.73,2.39,2.39,0,0,1,2.69-2.57h4.9v3.79h-3.34c-.55,0-1.13.17-1.13.79s.58.8,1.13.8h9.65v3.79H172.4v-3.79Z" fill="#fff" />
                            <motion.path d="M174.9,314h-2.5v-1.27h-2.47V309h2.47v-1.66h2.5V309h7.49c.81,0,1.24,0,1.24-.92v-.74h2.5v3.1c0,1.89-1.06,2.35-2.86,2.35H174.9Z" fill="#fff" />
                            <motion.path d="M174.9,307h-2.5v-.84h-.89a2.39,2.39,0,0,1-2.47-2.45v-2.42h2.5c0,.93.31,1.08.86,1.08v-1.08h2.5v1.08h11.23v3.79H174.9Z" fill="#fff" />
                            <motion.path d="M182.65,291.21c2.54,0,3.65,2.16,3.65,4.58s-1.11,4.59-3.65,4.59H176.1c-2.47,0-3.87-1.64-3.87-4.59s1.4-4.58,3.87-4.58Zm.19,5.37c.51,0,1-.19,1-.79s-.45-.79-1-.79h-7.15c-.5,0-1,.19-1,.79s.46.79,1,.79Z" fill="#fff" />
                            <motion.path d="M186.13,290.13H169v-3.8h17.09Z" fill="#fff" />
                            <motion.path d="M171.47,285.23H169v-3.79h2.43Zm14.66,0H172.4v-3.79h13.73Z" fill="#fff" />
                            <motion.path d="M182.65,271.19c2.54,0,3.65,2.16,3.65,4.59s-1.11,4.58-3.65,4.58H176.1c-2.47,0-3.87-1.63-3.87-4.58s1.4-4.59,3.87-4.59Zm.19,5.38c.51,0,1-.19,1-.79s-.45-.8-1-.8h-7.15c-.5,0-1,.2-1,.8s.46.79,1,.79Z" fill="#fff" />
                        </motion.g>

                        {/* ----------------------------Contact Petal---------------------------- */}
                        <motion.g
                            whileHover={{
                                x: -120,
                                scale: 2,
                                transition: { duration: 1 },
                            }}>
                            <motion.path d="M100.05,160.56c-.09.39-.19.78-.28,1.18,0,.2-.09.41-.13.61-.11.47-.21,1-.3,1.42,0,.13,0,.26-.08.39-.11.55-.21,1.1-.31,1.66,0,0,0,.06,0,.1a82.58,82.58,0,0,0,0,28.17s0,.06,0,.09c.1.56.21,1.12.31,1.67,0,.13,0,.25.08.38.09.48.2,1,.3,1.43,0,.2.09.4.13.6.09.4.19.79.28,1.19L51,212.57c-22.12,5.86-30.38-.44-38.88-9.28C6.46,197.47,3.5,189.41,3.5,180s3-17.47,8.57-23.29c8.5-8.84,16.76-15.13,38.88-9.27Z" fill="#2086c6" />
                            <motion.path d="M25,179.34v2.26c0,3.19-1.71,4.73-5.07,4.73-2.64,0-5-1.08-5-5v-7.77c0-3.91,2.38-5,5-5,2.9,0,5.07.86,5.07,4.56V175H21v-2.35c0-.7-.22-1.35-1.08-1.35s-1,.65-1,1.35v9.6c0,.69.22,1.34,1,1.34s1.08-.65,1.08-1.34l0-2.91Z" fill="#fff" />
                            <motion.path d="M35.23,182.51c0,2.54-2.16,3.65-4.59,3.65s-4.58-1.11-4.58-3.65V176c0-2.47,1.63-3.87,4.58-3.87s4.59,1.4,4.59,3.87Zm-5.38.19c0,.51.19,1,.79,1s.8-.45.8-1v-7.15c0-.5-.19-1-.8-1s-.79.46-.79,1Z" fill="#fff" />
                            <motion.path d="M40.08,174h0a2.59,2.59,0,0,1,2.76-1.88c1.71,0,2.57,1.18,2.57,3.15V186H41.66v-9.53c0-.6,0-1.25-.77-1.25s-.81.65-.81,1.25V186h-3.8V172.26h3.8Z" fill="#fff" />
                            <motion.path d="M46.17,174.76v-2.5h1.27v-2.47h3.8v2.47h1.65v2.5H51.24v7.49c0,.81,0,1.25.91,1.25h.74V186H49.8c-1.9,0-2.36-1.05-2.36-2.86v-8.37Z" fill="#fff" />
                            <motion.path d="M59,184.38h-.05a2.68,2.68,0,0,1-2.66,1.78,2.51,2.51,0,0,1-2.67-2.81v-2c0-3.6,5.38-3.17,5.38-5.71,0-.55-.17-1-.79-1s-.8.46-.8,1v1.51H53.61v-1.27c0-2.76,2.31-3.75,4.59-3.75s4.58,1,4.58,3.75V186H59Zm-1.59-1.92a.68.68,0,0,0,.7.72c.79,0,.89-.52.89-1.75v-2.38c-.75.53-1.59.84-1.59,1.92Z" fill="#fff" />
                            <motion.path d="M69.21,175.55c0-.5-.19-1-.79-1s-.79.46-.79,1v7.15c0,.51.19,1,.79,1s.79-.45.79-1v-2.13H73v2c0,2.59-1.92,3.58-4.6,3.58-2.84,0-4.57-1.18-4.57-3.82v-6.41c0-2.25,1.68-3.84,4.57-3.84,2.44,0,4.6.92,4.6,3.87v1.15H69.21Z" fill="#fff" />
                            <motion.path d="M73.72,174.76v-2.5H75v-2.47h3.8v2.47h1.65v2.5H78.79v7.49c0,.81,0,1.25.91,1.25h.74V186H77.35c-1.9,0-2.36-1.05-2.36-2.86v-8.37Z" fill="#fff" />
                        </motion.g>

                        {/* ----------------------------Other Petals---------------------------- */}
                        <motion.path d="M332.85,91.75c4.7,8.15,6.17,16.61,4.22,24.46-2.94,11.9-6.95,21.49-29,27.47L259,156.86c-.76-2.57-1.64-5.12-2.66-7.63l-.3-.72c-.1-.24-.19-.47-.3-.71a81.47,81.47,0,0,0-16.18-24.63l35.94-35.89C291.7,71.14,302,72.46,313.78,75.87,321.55,78.11,328.14,83.6,332.85,91.75Z" fill="#f78f42" />
                        <motion.path d="M337.07,243.79c1.95,7.85.48,16.31-4.22,24.46s-11.3,13.65-19.07,15.89c-11.78,3.4-22.08,4.72-38.31-11.41l-35.94-35.9a81.35,81.35,0,0,0,16.18-24.63c.11-.23.2-.47.3-.71l.3-.72c1-2.51,1.9-5.05,2.66-7.63L308,216.32C330.12,222.31,334.13,231.89,337.07,243.79Z" fill="#fcef56" />
                        <motion.path d="M284.13,46.22c3.4,11.78,4.72,22.08-11.41,38.3l-35.89,36a81.47,81.47,0,0,0-24.63-16.18l-.72-.31-.71-.29q-3.77-1.53-7.64-2.67L216.32,52c6-22.08,15.56-26.09,27.47-29,7.85-1.94,16.3-.48,24.46,4.23S281.89,38.45,284.13,46.22Z" fill="#f15a42" />
                        <motion.path d="M272.72,275.48c16.13,16.22,14.81,26.52,11.41,38.31-2.24,7.76-7.73,14.36-15.88,19.06s-16.61,6.17-24.46,4.23c-11.91-2.95-21.49-7-27.47-29L203.13,259q3.63-1.08,7.17-2.49l.86-.34.53-.22c.88-.36,1.75-.74,2.61-1.13s1.48-.68,2.21-1l0,0a81.19,81.19,0,0,0,20.29-14.21Z" fill="#a2cf62" />
                        <motion.path d="M209.09,134.13c.79,2.4.16,4.76-1.4,5.27s-3.47-1-4.26-3.41-.16-4.76,1.4-5.28S208.3,131.73,209.09,134.13Z" fill="#fff" />
                        <motion.path d="M143.67,52,156.86,101q-3.87,1.14-7.63,2.67l-.72.3-.72.29a81.68,81.68,0,0,0-24.63,16.19L87.27,84.53C71.14,68.3,72.46,58,75.86,46.22c2.24-7.77,7.74-14.36,15.89-19.07S108.36,21,116.2,22.92C128.11,25.87,137.69,29.88,143.67,52Z" fill="#a155a1" />
                        <motion.path d="M156.86,259,143.68,308c-6,22.08-15.57,26.09-27.48,29-7.84,1.94-16.3.48-24.45-4.23s-13.65-11.3-15.89-19.06c-3.4-11.79-4.72-22.09,11.41-38.31l35.89-36a81.54,81.54,0,0,0,25.13,16.4l.55.23.83.32C152,257.43,154.43,258.26,156.86,259Z" fill="#01b5ac" />
                        <motion.path d="M84.52,87.28l36,35.89a83,83,0,0,0-9.44,12,.83.83,0,0,0-.08.12c-.31.48-.61,1-.91,1.44l-.22.36c-.31.5-.61,1-.91,1.53l-.16.27a81.77,81.77,0,0,0-6,12.78s0,.08,0,.12c-.19.52-.38,1-.56,1.56,0,.14-.09.27-.13.4-.15.45-.3.9-.44,1.36-.07.2-.14.41-.2.62-.12.39-.24.77-.35,1.16L52,143.68c-22.09-6-26.09-15.57-29-27.47-1.94-7.85-.48-16.31,4.23-24.46s11.3-13.64,19.06-15.88C58,72.46,68.3,71.14,84.52,87.28Z" fill="#524fa1" />
                        <motion.path d="M120.47,236.83l-35.95,35.9C68.3,288.86,58,287.54,46.21,284.14c-7.76-2.24-14.36-7.74-19.06-15.89S21,251.64,22.92,243.79c2.95-11.9,7-21.48,29-27.47L101,203.13h0c.11.38.23.76.35,1.15.06.21.13.43.2.64.14.45.29.89.44,1.34,0,.14.09.27.14.41.18.52.36,1,.55,1.55a.58.58,0,0,0,0,.14,82.88,82.88,0,0,0,17.7,28.46Z" fill="#2db6ea" />

                    </motion.g>








                    {/* ----------------------------Face---------------------------- */}
                    <motion.g>
                        <motion.path d="M154.87,130.18c3.45,2.09,3.73,7.94.63,13.07s-8.41,7.59-11.86,5.5-3.74-7.94-.64-13.07S151.42,128.09,154.87,130.18Zm.38,5.81c.79-2.4.16-4.76-1.4-5.28s-3.47,1-4.26,3.42-.16,4.76,1.4,5.27S154.46,138.39,155.25,136Zm-8.34,9.23c.55-1.66.05-3.31-1.1-3.69s-2.53.66-3.07,2.32-.05,3.31,1.1,3.69S146.37,146.88,146.91,145.22Z" fill="#231f20" />
                        <motion.path d="M153.85,130.71c1.56.52,2.19,2.88,1.4,5.28s-2.69,3.93-4.26,3.41-2.19-2.87-1.4-5.27S152.29,130.2,153.85,130.71Z" fill="#fff" />
                        <motion.path d="M145.81,141.53c1.15.38,1.65,2,1.1,3.69s-1.92,2.7-3.07,2.32-1.65-2-1.1-3.69S144.66,141.16,145.81,141.53Z" fill="#fff" />
                        <motion.path d="M239.11,170.27l-.21,1.34c-4.81,30.91-29.89,64-59.56,64s-54.76-33.1-59.57-64l-.21-1.34,1.25-.54c.25-.11,25.24-10.65,58.53-10.65s58.27,10.54,58.52,10.65ZM215.68,213a85.36,85.36,0,0,0,19.53-40.58,163.17,163.17,0,0,0-111.75,0A85.35,85.35,0,0,0,143,213c10.81,12.31,23.72,19.09,36.35,19.09S204.87,225.34,215.68,213Z" fill="#231f20" />
                        <motion.path d="M235.21,172.45A85.36,85.36,0,0,1,215.68,213c-10.81,12.31-23.72,19.09-36.34,19.09S153.8,225.34,143,213a85.35,85.35,0,0,1-19.53-40.59,163.17,163.17,0,0,1,111.75,0Z" fill="#ed2025" />
                        <motion.path d="M215.68,135.68c3.1,5.13,2.82,11-.63,13.07s-8.76-.38-11.87-5.5-2.82-11,.64-13.07S212.58,130.56,215.68,135.68Zm-.83,11.86c1.15-.38,1.64-2,1.1-3.69s-1.92-2.69-3.08-2.32-1.64,2-1.1,3.69S213.7,147.92,214.85,147.54Zm-7.16-8.14c1.56-.51,2.19-2.87,1.4-5.27s-2.69-3.93-4.26-3.42-2.19,2.88-1.4,5.28S206.13,139.92,207.69,139.4Z" fill="#231f20" />
                        <motion.path d="M216,143.85c.54,1.66.05,3.31-1.1,3.69s-2.53-.66-3.08-2.32-.05-3.31,1.1-3.69S215.4,142.19,216,143.85Z" fill="#fff" />
                        <motion.path d="M257.89,168.25a79,79,0,0,1,0,23.51c0,.14-.05.29-.07.44l-.18,1.11-.21,1.16c0,.13-.05.27-.08.4q-.54,2.77-1.27,5.52c-.33,1.25-.7,2.48-1.09,3.71l-.06.18c-.15.48-.31,1-.48,1.43-.1.31-.21.62-.32.93s-.15.41-.23.62a79.17,79.17,0,0,1-46.65,46.65l-.62.22-.92.33-1.43.48-.19.06-1.81.55c-.63.19-1.26.37-1.9.54-1.83.49-3.68.91-5.53,1.27l-.37.07-1.2.21-1.06.18-.49.08a79.68,79.68,0,0,1-11.73.87c-1.36,0-2.71,0-4.05-.1-2.59-.13-5.15-.4-7.68-.77l-.5-.08-1.05-.17-1.21-.22-.36-.07q-2.78-.54-5.54-1.27c-1.25-.34-2.48-.7-3.71-1.09l-.19-.07-1.42-.47-.93-.33-.61-.22A78.79,78.79,0,0,1,101.25,180c0-1.94.08-3.88.22-5.81a78.71,78.71,0,0,1,38.2-61.82c.4-.24.81-.49,1.22-.72l.65-.37,1.52-.82.53-.28c.66-.35,1.33-.68,2-1l.51-.24,1.58-.73.69-.3c.53-.24,1.07-.46,1.61-.69l.51-.21c.7-.28,1.39-.55,2.1-.81l.55-.2,1.63-.57.7-.23,1.7-.54.49-.15c.72-.21,1.44-.41,2.17-.6l.59-.15c.55-.15,1.1-.28,1.66-.41l.71-.16c.6-.14,1.2-.27,1.81-.39l.43-.09q1.11-.21,2.22-.39l.63-.1,1.68-.25.71-.09,1.91-.22.37,0,2.26-.18.65,0,1.69-.08.72,0c.67,0,1.34,0,2,0H180c.7,0,1.4,0,2.1,0l.66,0,1.76.08.59,0c.77,0,1.53.11,2.3.19l.27,0,2,.23.64.09c.6.08,1.19.16,1.79.26l.53.08c.76.13,1.52.26,2.28.41l.29.06c.66.13,1.32.27,2,.42l.61.14,1.81.44.46.12c.75.2,1.5.41,2.24.63l.31.09c.64.19,1.27.39,1.91.6l.57.19c.61.2,1.21.42,1.82.64l.38.13c.73.27,1.46.56,2.19.85l.32.13q.91.38,1.83.78l.53.23L214,109l.3.15c.71.34,1.42.69,2.12,1.06l.33.17c.58.31,1.16.62,1.74,1l.5.28,1.52.89a79.23,79.23,0,0,1,33.35,40.25c.08.2.15.41.23.62s.22.61.32.92c.17.48.33,1,.48,1.43l.06.19c.39,1.22.76,2.46,1.09,3.71q.74,2.74,1.27,5.51c0,.13,0,.27.08.41l.21,1.16.18,1.1C257.84,168,257.86,168.1,257.89,168.25Zm-19,3.36.21-1.34-1.25-.54c-.25-.11-25.24-10.65-58.52-10.65s-58.28,10.54-58.53,10.65l-1.25.54.21,1.34c4.81,30.91,29.89,64,59.57,64S234.09,202.52,238.9,171.61Zm-23.85-22.86c3.45-2.09,3.73-7.94.63-13.07s-8.41-7.59-11.86-5.5-3.74,7.94-.64,13.07S211.6,150.84,215.05,148.75Zm-59.55-5.5c3.1-5.13,2.82-11-.63-13.07s-8.76.38-11.87,5.5-2.82,11,.64,13.07S152.4,148.37,155.5,143.25Z" fill="#fcee23" />
                    </motion.g>



                </g>
            </g>
        </svg>
    )
};
export default MurakamiFlower;