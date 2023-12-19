import logo from './logo.svg';
import jpg1 from './blog-image-1.jpg';
import jpg2 from './blog-image-2.jpg';
import Header from './Header';
import Footer from './Footer';
import Article from './Article';
import './App.css';

function App() {
  const articles = [
    {
      date: '11/12/2020',
      title: 'On the Street in Brooklyn',
      src: jpg1,
      alt: 'Description of the image',
      body: 'Cray ipsum, dolor sit amet consectetur adipisicing elit. Repellatuidem deserunt nemo dignissimos fuga veniam inventore eligendi magnam aperiam odit mollitia cupiditate eveniet velit officiis magni aliquid, laborum dolor? Quasi? Veniam amet rerum ducimus est ea at neque alias. Temporibus perspiciatis at impedit voluptas aut voluptates facere totam aliquid debitis rerum, ex consequuntur, nulla eius quae corrupti optio atque ut. Repellendus molestiae doloribus recusandae, itaque voluptatibus placeat repellat deserunt amet eaque dignissimos, iste sapiente magnam doloremque. Fugit, cum, cupiditate aliquam, mollitia quisquam sed nulla eveniet doloribus neque optio odio qui! Id architecto impedit consequatur rem quaerat voluptatibus pariatur quas, quod quisquam quo ab molestiae.'
    },
    {
      date: '11/11/2020',
      title: 'Vintage in Vogue',
      src: jpg2,
      alt: 'Description of the image',
      body: 'Cray ipsum, dolor sit amet consectetur adipisicing elit. Repellatuidem deserunt nemo dignissimos fuga veniam inventore eligendi magnam aperiam odit mollitia cupiditate eveniet velit officiis magni aliquid, laborum dolor? Quasi? Veniam amet rerum ducimus est ea at neque alias. Temporibus perspiciatis at impedit voluptas aut voluptates facere totam aliquid debitis rerum, ex consequuntur, nulla eius quae corrupti optio atque ut. Repellendus molestiae doloribus recusandae, itaque voluptatibus placeat repellat deserunt amet eaque dignissimos, iste sapiente magnam doloremque. Fugit, cum, cupiditate aliquam, mollitia quisquam sed nulla eveniet doloribus neque optio odio qui! Id architecto impedit consequatur rem quaerat voluptatibus pariatur quas, quod quisquam quo ab molestiae.'
    }
  ]
  return (
    <div>
    
    <Header/>

    <main>
      {articles.map((article, idx) => {
        return <Article key={idx} article={article} />;
      })}
    </main>

    <Footer />
  </div>
  );
}

export default App;
