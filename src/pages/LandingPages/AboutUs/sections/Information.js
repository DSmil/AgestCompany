/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";

function Information() {
  return (
    <MKBox component="section" py={7}>
      <Container>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} lg={6}>
            <MKBox mb={5}>
              <DefaultInfoCard
                icon="public"
                description="Agest Company is a company that was established in January 2011, this is a company that deals with trading and processing of paper and paper products.
                Our work is mainly focused on the needs of the textile industry (plotter paper, cutting paper and other paper products), but in addition, our company also has paper products that are used for the food industry.
                We have been doing this successfully for 11 years, which is evidenced by the long-term cooperation with several companies in our country and in neighbouring countries.
                In the name of good cooperation and to facilitate the work of our customers, we have our own warehouse space and deliver the goods to their seats in a timely manner within the stipulated time limits."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={4} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}>
            <CenteredBlogCard
              image="https://raw.githubusercontent.com/DSmil/Agest/main/Images/card.jpg"
              title="Products"
              description="Feel free to explore our products."
              action={{
                type: "internal",
                route: "../../../Presentation/index.js",
                color: "info",
                label: "find out more",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
