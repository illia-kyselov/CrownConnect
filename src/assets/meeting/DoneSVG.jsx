import * as React from "react"
import Svg, { Path } from "react-native-svg"
const DoneSVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <Path
            fill="#fff"
            d="M21 7 9 19l-5.5-5.5 1.41-1.41L9 16.17 19.59 5.59 21 7Z"
        />
    </Svg>
)
export default DoneSVG
