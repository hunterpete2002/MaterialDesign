import React from "react";
import { Appbar } from "react-native-paper";

export default function MainAppbar(data) {

    return (
        <Appbar.Header
            mode="center-aligned"
            elevated={true}
        >
            <Appbar.Content title={data.title} />
        </Appbar.Header>
    )

}