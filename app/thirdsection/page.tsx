import React from "react";
// import "../assets/css/card.scss";
import "@/public/assets/css/card.scss";

export default function ThirdSection() {
  return (
    <>
      <section className="thirdSection">
        <span className="textgrey">Projects</span>
        <h1>My projects section</h1>
        <div className="project-cards">
          <div className="project-card">
            <h2>Project 1</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
              dolorum eveniet illum molestiae neque soluta architecto, expedita
              est, tempora culpa nulla amet mollitia totam error ipsum ea unde
              atque eaque?
            </p>
          </div>
          <div className="project-card">
            <h2>Project 2</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
              odio aliquam quod pariatur sunt expedita ipsam iure deserunt sed
              sequi. Veritatis incidunt aperiam quos. Eos id odit ipsum illum
              omnis.
            </p>
          </div>
          <div className="project-card">
            <h2>Project 3</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
              eaque obcaecati assumenda. Beatae modi laudantium, quis rem
              consectetur nemo incidunt voluptas similique, ab aspernatur cumque
              harum sunt natus dolor excepturi.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

// export default ThirdSection;
