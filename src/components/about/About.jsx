import "./about.scss"

export default function About() {
  return (
    <div className="about" id = "about" >
      <div className="about-left">
        <div className="about-card bg"></div>
        <div className="about-card">
          <img 
            className="about-img"
            src = "assets/_MG_8808.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="about-right">
        <h1 className="about-title">Inês Presa</h1>
        <p className="about-desc">
          Inês started studying the violin at six years old with Professor Amaia Perez Eizaguirre at Companhia da Música in Braga – Portugal. She then completed her secondary education in 2018 with Professor Miguel Simões.<br/>
In 2018/2019 she applied and was admitted to the Royal Conservatoire of Antwerp, where she completed the first year of the bachelor’s degree in Violin in the class of Professor Alissa Margulis.<br/>
Inês is currently studying at The University of Minho, where she will receive her bachelor’s degree in violin with Professors Eliot Lawson and Illya Grubert, as well as a bachelor’s degree in Computer Science.<br/>
Complementing her academic studies, Inês has participated regularly in masterclasses in England, Belgium and Portugal, in particular the Cadenza International Summer Music School, the Easter Masterclasses at the Conservatoire royal de Bruxelles and the Rencontres Musicales Internacionales organized in Braga by the Jeunes Virtuoses de New York.<br/>
In this and other encounters, Inês has had enriching experiences with important names of the violin world, namely Leland Chen, Erik Sluys, Arik Braude, Benjamin Braude, Sophie Arbuckle, Naaman Sluchin and Joyce Tan.

 
          <br/>
        </p>
      </div>
    </div>
  )
}

