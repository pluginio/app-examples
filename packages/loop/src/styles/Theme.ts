import { extendTheme } from '@chakra-ui/react'

const config = {
    useSystemColorMode: true
}

const theme = extendTheme({
    config,
    components: {
        Container: {
            baseStyle: (props: any) => ({
                backgroundColor: props.colorMode === "dark" ? "#1A202C" : "#EDF2F7"
            })
        }
    }
})

export default theme
