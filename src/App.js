import './App.css';
import { Layout, Header, Navigation, Drawer, Content} from 'react-mdl';

function App() {
  return (
    <div className="App">
         <Layout>
        <Header title="John Pendergrass" scroll>
            <Navigation>
                <a href="/">Link</a>
                <a href="/">Link</a>
                <a href="/">Link</a>
                <a href="/">Link</a>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <a href="/">Link</a>
                <a href="/">Link</a>
                <a href="/">Link</a>
                <a href="/">Link</a>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
        </Content>
    </Layout>
    </div>
  );
}

export default App;