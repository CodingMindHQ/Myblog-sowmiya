import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './Featuredpost';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const sections = [
  { title: 'Fashion ', url: 'https://www.myntra.com/' },
  { title: 'Food ', url: 'https://www.zomato.com/ncr' },
  { title: 'Lifestyle ', url: 'https://www.makemytrip.com/' },
  { title: 'Sports ', url: 'https://www.google.com/search?q=sports&tbm=fin' },
  { title: 'Finance ', url: 'https://www.google.com/finance' },
  { title: 'Music', url: 'https://www.youtube.com/channel/UCH9Jc5qKeiGDXd73NCXjMpw' },
  { title: 'Science ', url: 'https://explorehealthcareers.org/7-tips-studying-science/' },
  { title: 'Health ', url: 'https://www.eufic.org/en/healthy-living/article/10-healthy-lifestyle-tips-for-adults' },
  { title: 'Fitness', url: 'https://www.aalo.nl/fitness-academie/fitness-trainer-a-pakket/?gclid=EAIaIQobChMI2s2KwfDQ6gIVVCQrCh2JugAlEAAYASAAEgJtqPD_BwE&gclsrc=aw.ds' },
  { title: 'Travel ', url: 'https://www.makemytrip.com/' },
];

const mainFeaturedPost = {
  title: 'Learn And Explore',
  description:" Travel with us for best knowledge and to learn new ideas to explore in career ",
  image: '<img style="display:none" src=https://www.shutterstock.com/image-vector/blogger-blogging-creation-highquality-content-writing-645522004>',
  imgText: 'main image description',
  linkText: 'Continue reading…',
};

const featuredPosts = [
  {
    title: 'Smart Learning',
    date: 'FEB 2020',
    description:
      'Smart Learning or intelligent education includes new educational contexts in which the importance is focused on the students use of technology at their fingertips.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQRB4Jx0lGzD_gvEDmTzhykQhbb-ShdvETRTQ&usqp=CAU',
    imageText: 'Image Text',
  },
  {
    title: 'Creative Mind',
    date: 'MAY 2020',
    description:
      'creative mind is the one that sees information – particularly from the world around it – and relates it to their experiences and existing knowledge in order to create.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRVf4qznZdNOPS6l-IR5AuNnYfVLl0ug3m4eg&usqp=CAU',
    imageText: 'Image Text',
  },
];


const post=" ";

const sidebar = {
  title: 'About',
  description:
    'Smart Learning or intelligent education includes new educational contexts in which the importance is focused on the students use of technology at their fingertips',
  archives: [
    { title: 'Archive1', url: '#' },
    { title: 'Archive2', url: '#' },
    { title: 'Archive3', url: '#' },
    { title: 'Archive4', url: '#' },
    { title: 'Archive5', url: '#' },
    { title: 'Archive6', url: '#' },
   ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

export default function Blog() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="My Blog" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} className={classes.mainGrid}>
            <Main title="Learn the best " post={post} />
            
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer title="Footer" style={{color:"white"}} description="The best way of knowledge exploration" />
    </React.Fragment>
  );
}