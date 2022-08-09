import React from 'react'
import { Container, Divider, Grid, List, Icon } from "semantic-ui-react";

export default function Footer() {
  return (
    <div><Container className="footer">
    <Divider />
    <br />

    <Grid>
      <Grid.Row centered>
        {/* <List link horizontal>
          <List.Item as={NavLink} to="/home" content="Home" />
          <List.Item as={NavLink} to="/jobPostings" content="Job Postings" />
          <List.Item as={NavLink} to="/candidates" content="Candidates" />
          <List.Item as={NavLink} to="/employers" content="Employers" />
          <List.Item as={NavLink} to="/aboutUs" content="About Us" />
        </List> */}
      </Grid.Row>
      <Grid.Row centered>2022 ・Mehmet Karakaş</Grid.Row>
      <Grid.Row centered>
        <List link horizontal>
          <List.Item href="https://github.com/Mehmetkrks09" target="blank">
            <Icon name="github" size="large" />
          </List.Item>
          <List.Item href="https://www.linkedin.com/in/MehmetKarakaş/" target="blank">
            <Icon name="linkedin" size="large" />
          </List.Item>
        
          <Grid.Row centered> <h5>Tüm Hakları Saklıdır &copy;</h5> </Grid.Row>
        </List>
        
      </Grid.Row>
    </Grid>
    <br />
    <br />
    <br />
  </Container></div>
  )
}
