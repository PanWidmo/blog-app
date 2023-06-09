import styles from 'styles/App.module.scss';
import 'styles/global.scss';
import { Routes, Route } from 'react-router-dom';
import { Missing } from 'components/Missing';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { Home } from 'components/Home';
import { NewPost } from 'components/NewPost';
import { PostPage } from 'components/PostPage';
import { Nav } from 'components/Nav';
import { EditPost } from 'components/EditPost';
import { DataProvider } from 'context/DataContext';

export const App = () => {
  return (
    <div className={styles.App}>
      <Header title="Blog App" />
      <DataProvider>
        <Nav />
        <Routes>
          <Route path="/blog-app" element={<Home />} />
          <Route path="blog-app/post" element={<NewPost />} />
          <Route path="blog-app/edit/:id" element={<EditPost />} />
          <Route path="blog-app/post/:id" element={<PostPage />} />
          <Route path="blog-app/*" element={<Missing />} />
        </Routes>
      </DataProvider>
      <Footer />
    </div>
  );
};
