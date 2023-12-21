import { Link, useParams } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h2 style={{ position: 'relative', top: '0', width: '100%', textAlign: 'center', marginTop: '100px', color: 'darkgreen'}}>HOME</h2>
      <div style={{ margin: '100px', color: 'darkgreen', fontSize: '20px', border:'5px solid'}}>
        <div style={{margin:'20px'}}>
        <h3>
          Welcome to HellaMorph, a Greek Morphology Application designed for the study of the New Testament Gospel of Luke!
        </h3>
        <p>
        This app is designed to facilitate the study of word morphology in the Greek New Testament, particularly in the Gospel of Luke. You will be able to study the Greek words and add them to a word bank for your study needs.
        </p>
        <p>
        Use the dropdown boxes on the navbar to search through the Gospel of Luke by chapter or verse or click on one of the chapter links below. Simply click on a word in the Greek text to generate a word card that you can add to your own personal wordbank. You may also navigate to the English translation of the text from the links below or from the Greek chapter pages.
        </p>
        <h4>Greek Chapters</h4>
        <p>
        <Link to='http://localhost:5173/chapter/1/'>Chapter 1</Link>{' / '}
        <Link to='http://localhost:5173/chapter/2/'>Chapter 2</Link>{' / '}
        <Link to='http://localhost:5173/chapter/3/'>Chapter 3</Link>{' / '}
        <Link to='http://localhost:5173/chapter/4/'>Chapter 4</Link>{' / '}
        <Link to='http://localhost:5173/chapter/5/'>Chapter 5</Link>{' / '}
        <Link to='http://localhost:5173/chapter/6/'>Chapter 6</Link>{' / '}
        <Link to='http://localhost:5173/chapter/7/'>Chapter 7</Link>{' / '}
        <Link to='http://localhost:5173/chapter/8/'>Chapter 8</Link>{' / '}
        <Link to='http://localhost:5173/chapter/9/'>Chapter 9</Link>{' / '}
        <Link to='http://localhost:5173/chapter/10/'>Chapter 10</Link>{' / '}
        <Link to='http://localhost:5173/chapter/11/'>Chapter 11</Link>{' / '}
        <Link to='http://localhost:5173/chapter/12/'>Chapter 12</Link>{' / '}
        <Link to='http://localhost:5173/chapter/13/'>Chapter 13</Link>{' / '}
        <Link to='http://localhost:5173/chapter/14/'>Chapter 14</Link>{' / '}
        <Link to='http://localhost:5173/chapter/15/'>Chapter 15</Link>{' / '}
        <Link to='http://localhost:5173/chapter/16/'>Chapter 16</Link>{' / '}
        <Link to='http://localhost:5173/chapter/17/'>Chapter 17</Link>{' / '}
        <Link to='http://localhost:5173/chapter/18/'>Chapter 18</Link>{' / '}
        <Link to='http://localhost:5173/chapter/19/'>Chapter 19</Link>{' / '}
        <Link to='http://localhost:5173/chapter/20/'>Chapter 20</Link>{' / '}
        <Link to='http://localhost:5173/chapter/21/'>Chapter 21</Link>{' / '}
        <Link to='http://localhost:5173/chapter/22/'>Chapter 22</Link>{' / '}
        <Link to='http://localhost:5173/chapter/23/'>Chapter 23</Link>{' / '}
        <Link to='http://localhost:5173/chapter/24/'>Chapter 24</Link>
        </p>
        <h4>English Chapters</h4>
       <Link to='http://localhost:5173/chapter/1/translation/'>Chapter 1</Link>{' / '}
        <Link to='http://localhost:5173/chapter/2/translation/'>Chapter 2</Link>{' / '}
        <Link to='http://localhost:5173/chapter/3/translation/'>Chapter 3</Link>{' / '}
        <Link to='http://localhost:5173/chapter/4/translation/'>Chapter 4</Link>{' / '}
        <Link to='http://localhost:5173/chapter/5/translation/'>Chapter 5</Link>{' / '}
        <Link to='http://localhost:5173/chapter/6/translation/'>Chapter 6</Link>{' / '}
        <Link to='http://localhost:5173/chapter/7/translation/'>Chapter 7</Link>{' / '}
        <Link to='http://localhost:5173/chapter/8/translation/'>Chapter 8</Link>{' / '}
        <Link to='http://localhost:5173/chapter/9/translation/'>Chapter 9</Link>{' / '}
        <Link to='http://localhost:5173/chapter/10/translation/'>Chapter 10</Link>{' / '}
        <Link to='http://localhost:5173/chapter/11/translation/'>Chapter 11</Link>{' / '}
        <Link to='http://localhost:5173/chapter/12/translation/'>Chapter 12</Link>{' / '}
        <Link to='http://localhost:5173/chapter/13/translation/'>Chapter 13</Link>{' / '}
        <Link to='http://localhost:5173/chapter/14/translation/'>Chapter 14</Link>{' / '}
        <Link to='http://localhost:5173/chapter/15/translation/'>Chapter 15</Link>{' / '}
        <Link to='http://localhost:5173/chapter/16/translation/'>Chapter 16</Link>{' / '}
        <Link to='http://localhost:5173/chapter/17/translation/'>Chapter 17</Link>{' / '}
        <Link to='http://localhost:5173/chapter/18/translation/'>Chapter 18</Link>{' / '}
        <Link to='http://localhost:5173/chapter/19/translation/'>Chapter 19</Link>{' / '}
        <Link to='http://localhost:5173/chapter/20/translation/'>Chapter 20</Link>{' / '}
        <Link to='http://localhost:5173/chapter/21/translation/'>Chapter 21</Link>{' / '}
        <Link to='http://localhost:5173/chapter/22/translation/'>Chapter 22</Link>{' / '}
        <Link to='http://localhost:5173/chapter/23/translation/'>Chapter 23</Link>{' / '}
        <Link to='http://localhost:5173/chapter/24/translation/'>Chapter 24</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;