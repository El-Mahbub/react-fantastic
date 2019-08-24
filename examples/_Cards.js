import React, { Component } from 'react';
import { app_name, app_logo, avatar_default } from 'configs/Constants';
import { Grid, GridItem, Card, CardContent, CardHeader, CardMedia, CardBody, CardFooter, TextView, Image } from 'views/libs/';
class _Cards extends Component {
    render() {
        return (
            <React.Fragment>
                <Grid className="mt-2">
                    <GridItem xs={12} lg={6}>
                        <Card className="m-1" inline>
                            <CardMedia>
                                <Image src={process.env.PUBLIC_URL+'/assets/img/blue-hero.jpg'}/>
                            </CardMedia>
                            <CardContent>
                                    <CardHeader>
                                        <TextView type="h4">Judul</TextView>
                                    </CardHeader>
                                    <CardBody>
                                        <TextView type="p">
                                            The Paris area is one of the largest population centers in Europe, with more than 12 million inhabitants.
                                        </TextView>
                                    </CardBody>
                                    <CardFooter>
                                        <TextView type="p">
                                            Footer
                                        </TextView>
                                    </CardFooter>
                            </CardContent>
                        </Card>
                    </GridItem>
                    <GridItem xs={12} lg={6}>
                        <Card className="m-1">
                            <CardContent>
                                <CardMedia>
                                    <Image src={process.env.PUBLIC_URL+'/assets/img/blue-hero.jpg'}/>
                                </CardMedia>
                                <CardBody>
                                    <CardHeader>
                                        <TextView type="h4">Judul</TextView>
                                    </CardHeader>
                                    <TextView type="p">
                                        The Paris area is one of the largest population centers in Europe, with more than 12 million inhabitants.
                                    </TextView>
                                    <TextView>Lagi ah</TextView>
                                    <CardFooter>
                                        <TextView type="p">
                                            Footer
                                        </TextView>
                                    </CardFooter>
                                </CardBody>
                            </CardContent>
                        </Card>
                    </GridItem>
                </Grid>
            </React.Fragment>
        );
    }
}

export default _Cards;