

const Home = () => {
  return (
    <div>
      <h2 style={{ position: 'relative', top: '0', width: '100%', textAlign: 'center', marginTop: '50px', color: 'darkgreen'}}>GOSPEL OF LUKE GREEK MORPHOLOGY HOME PAGE</h2>
      <div style={{ margin: '100px', color: 'darkgreen', fontSize: '20px', border:'5px solid'}}>
        <div style={{margin:'20px'}}>
        <p>
          Welcome to the Greek New Testament Word Morphology App!
        </p>
        <p>
        This app is designed to facilitate the study of word morphology in the Greek New Testament, particularly in the Gospel of Luke. You will be able to study the Greek words and add them to a word bank for your study needs.
        </p>
        <p>
        Use the dropdown boxes on the navbar to search through the Gospel of Luke by chapter or verse. You can click on a word to generate a word card and then add the word to your own personal wordbank for your study purposes. You may also navigate to the English translation of the text from the pages with Greek Bible passages.
        </p>
        </div>
      </div>
    </div>
  );
};

export default Home;