import React from 'react';
import {TextView, Image, List, ListItem} from 'views/libs/';
export const adapter = props => {
    const li = props.data.length > 0 && props.data.map((e,i) => <ListItem key={e.key}>{e.value}</ListItem>);
    return (
        <List>
            {li}
        </List>
    )
};
export const adapterAdvance = props => {
    const li = props.data.length > 0 && props.data.map((e,i) => (
        <ListItem key={e.id}>
            <TextView type="p"><Image className="mr-2" circle size="xs" src={e.photo}/>{e.name}</TextView>
        </ListItem>
    ));
    return (
        <List inline>
            {li}
        </List>
    )
};