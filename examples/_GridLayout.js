import React, { Component } from 'react';
import { GridLayout, Grid } from 'views/libs/';
class _GridLayout extends Component {
    render() {
        return (
            <div>
                <h3>Basic Grid layout</h3>
                <GridLayout>
                    <Grid className="bg-primary" xs={3} sm={3} md={3} lg={3}>
                        <div className="p-2">
                            Grid content 1
                        </div>
                    </Grid>
                    <Grid className="bg-danger" xs={3} sm={3} md={3} lg={3}>
                        <div className="p-2">
                            Grid content 2
                        </div>
                    </Grid>
                    <Grid className="bg-success" xs={3} sm={3} md={3} lg={3}>
                        <div className="p-2">
                            Grid content 3
                        </div>
                    </Grid>
                    <Grid className="bg-attention" xs={3} sm={3} md={3} lg={3}>
                        <div className="p-2">
                            Grid content 4
                        </div>
                    </Grid>
                </GridLayout>
                <hr/>
                <GridLayout>
                    <Grid className="bg-primary" xs={3} sm={3} md={2} lg={2}>
                        <div className="p-2">
                            Grid content 1
                        </div>
                    </Grid>
                    <Grid className="bg-danger" xs={3} sm={3} md={2} lg={2}>
                        <div className="p-2">
                            Grid content 2
                        </div>
                    </Grid>
                    <Grid className="bg-success" xs={3} sm={3} md={2} lg={2}>
                        <div className="p-2">
                            Grid content 3
                        </div>
                    </Grid>
                    <Grid className="bg-attention" xs={3} sm={3} md={2} lg={2}>
                        <div className="p-2">
                            Grid content 4
                        </div>
                    </Grid>
                    <Grid className="bg-warning" xs={3} sm={3} md={2} lg={2}>
                        <div className="p-2">
                            Grid content 5
                        </div>
                    </Grid>
                    <Grid className="bg-info" xs={3} sm={3} md={2} lg={2}>
                        <div className="p-2">
                            Grid content 6
                        </div>
                    </Grid>
                </GridLayout>
            </div>
        );
    }
}

export default _GridLayout;