import React, { useState } from "react";
import "../assets/css/BlogDetail.scss";

import Image from "next/image";

const BlogDetail: React.FC = () => {
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState([
    "Comment 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Comment 2: Nullam vel tincidunt velit. Quisque eget...",
    "Comment 3: Sed euismod tincidunt nisl, sit amet efficitur urna facilisis in.",
  ]);

  const MAX_COMMENTS = 5; // Maximum number of comments to display

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = () => {
    if (newComment.trim() !== "") {
      const updatedComments = [
        `New Comment: ${newComment}`,
        ...comments.slice(0, MAX_COMMENTS - 1),
      ];
      setComments(updatedComments);
      setNewComment("");
    }
  };

  return (
    <>
      <div className="blog-detail-container">
        <div className="left-column">
          <div className="header">
            <Image
              src="https://pixabay.com/get/g0e8669ff4207cab2e20626d9d7a5858bcb42110f9513ef253022c55596e856b1f0a83dcfe8bcd5031a739aebb755e6f08e0384cd0b11d1323987a20a776eb920_1280.png"
              alt="Blog Header"
              className="blog-header-image"
            />
          </div>
          <div className="blog-details">
            <h1 className="blog-title">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consectetur ut numquam fugiat voluptatibus id eaque voluptatum
              laudantium repellendus error consequatur mollitia debitis tenetur
              iste harum esse, sit expedita assumenda sint, sapiente quidem
              maiores ea facilis accusamus fuga. Hic autem eum corporis eaque?
            </h1>
            <p className="blog-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              libero in odio soluta fugit laborum saepe, nulla accusantium
              exercitationem aut sunt magnam consectetur, doloribus qui eum
              impedit sequi provident corporis ipsum illum necessitatibus
              temporibus nam atque dolores? Dolore harum, consequatur vitae
              maiores tempora quos aliquid facilis mollitia dolorum sunt atque
              ad error aspernatur illo animi tenetur nulla qui dolores deserunt,
              placeat nam sapiente fugit quidem ea. Necessitatibus aliquam modi
              incidunt vel officiis quae voluptatum dolores nam possimus, eum
              tempora. Tempora, accusamus. Rem perspiciatis consectetur saepe
              quo repellat velit, eligendi odio fuga sequi expedita eius
              architecto odit iusto et illo cupiditate hic nesciunt eos
              dignissimos ut dicta debitis praesentium necessitatibus dolore.
              Voluptatem sequi quia illo nam culpa harum veniam voluptatibus
              hic. A, voluptatem fugiat! Adipisci dignissimos eaque natus totam
              nisi tempora nobis voluptas atque accusantium error recusandae,
              ratione assumenda maiores provident accusamus fugiat? Minima animi
              reprehenderit mollitia, culpa laboriosam, consectetur obcaecati ea
              quidem quo recusandae consequuntur? Vel dolorem, rem dignissimos
              dolore delectus nulla quia cupiditate illo sunt? Id repellendus
              perferendis cupiditate quas suscipit illo quae maxime eum fuga.
              Corrupti modi iusto, dolor pariatur id ipsa. Tempore voluptas
              reprehenderit delectus labore reiciendis pariatur recusandae, nemo
              optio, non at rerum expedita id in? Eligendi voluptatibus ad
              accusantium nihil, tenetur ea, impedit facere iusto vitae quod
              ullam facilis quo laudantium. Nulla omnis quis impedit beatae
              provident eveniet illum fugiat dolorum ab reprehenderit tempore
              quaerat qui dolorem porro veniam ipsam repellat architecto
              cupiditate consequuntur, debitis blanditiis. Animi fugiat,
              obcaecati, quae ex, quam quod libero eos ab maiores earum cum
              minima saepe voluptas cupiditate quibusdam labore esse deleniti
              qui repellat eius itaque blanditiis nam! Laboriosam distinctio
              nesciunt asperiores odio, praesentium saepe accusantium quia?
              Dolore vel repudiandae minima cumque, quasi similique ad veniam ex
              repellat iure aspernatur! Corrupti facilis aut saepe. Quod eum
              suscipit culpa animi excepturi corrupti necessitatibus
              exercitationem blanditiis reiciendis inventore quaerat amet
              similique esse qui, illum cumque. Soluta, odio. Eaque itaque
              architecto iusto qui, amet eveniet, harum ullam dolorem labore ad
              inventore laborum sequi saepe provident id quam ut exercitationem.
              Molestiae ut, dolorum aut, inventore placeat odio praesentium
              autem dolores ea ipsam maxime ipsa incidunt mollitia sit
              repudiandae, dolore corporis esse temporibus nesciunt a. Cumque,
              illum quia temporibus sunt soluta ullam, culpa voluptates, eius
              asperiores dolorem necessitatibus. Assumenda reiciendis nisi aut
              quo ipsa. Odit sed aut molestias libero dicta voluptas illo odio
              accusantium, voluptatem minus voluptatum dignissimos sit id quis
              ea, asperiores maxime nesciunt fugit sint. Repellendus doloremque
              repellat harum vero impedit omnis possimus inventore ullam fuga
              accusamus, natus consequatur aliquid molestiae! Optio doloribus
              expedita neque earum obcaecati necessitatibus sunt non similique
              aliquam recusandae quod, debitis vel quasi id quae velit at totam
              accusantium nobis, quaerat ipsam sit fugiat? Incidunt nemo
              eveniet, corporis modi possimus, debitis laborum qui libero id
              odio veniam, eos iusto neque accusamus. Fugiat perferendis et
              nihil illum error eligendi corrupti fuga nemo architecto?
              Cupiditate nam facilis ipsam, asperiores assumenda rem omnis
              porro, quis ab aut culpa ipsum eum quasi ducimus reprehenderit
              totam tempore voluptate beatae reiciendis, laudantium natus
              provident pariatur nostrum. Fugit ab, enim dicta provident
              similique eaque perferendis quam sequi libero odit autem
              voluptates molestiae perspiciatis quae hic non nulla, recusandae
              veniam culpa. Fugit eveniet, laboriosam voluptatum inventore natus
              aliquid, quisquam, doloremque mollitia facilis facere incidunt! Ex
              neque dolorum, iure libero repellendus explicabo non cumque
              reprehenderit assumenda, fugit corrupti? Ratione illum vero quod
              optio, nobis laudantium ducimus? Excepturi numquam sapiente
              reiciendis perferendis, veritatis ipsam libero? Repudiandae, odio
              dolorem! Temporibus placeat maiores ducimus. Nisi temporibus odit
              dicta doloribus, incidunt magnam similique ipsam ab consequuntur
              placeat earum assumenda, obcaecati et quisquam, dignissimos non
              nesciunt veniam! Sed eius amet adipisci eveniet esse aspernatur
              dolorum odit veniam nesciunt, dignissimos corporis explicabo
              aliquid! Facere mollitia numquam repellendus quas, distinctio
              fugiat animi, corrupti exercitationem a obcaecati ea illo sit?
              Voluptas unde alias dignissimos. Labore inventore voluptatibus
              fugit molestias impedit similique a magni minus sunt veritatis,
              dolorum ipsa ea quidem, odit pariatur iste voluptate hic eveniet?
              Cumque provident ducimus, aspernatur dicta quidem mollitia labore
              alias quas quis vitae possimus incidunt animi expedita nobis
              impedit laborum minus. Dolorum esse dolorem et eum voluptate
              laudantium veniam quod facere, atque perspiciatis temporibus illo
              iure laborum omnis voluptas a consequuntur totam iusto in eligendi
              qui voluptatibus labore debitis? Magni ad deleniti sunt assumenda
              animi, omnis voluptas neque expedita temporibus atque delectus?
              Accusantium optio dolores voluptates possimus rerum ut odio
              exercitationem similique debitis aut perferendis aliquam
              reiciendis repellendus ipsum pariatur atque, quo incidunt,
              eligendi sit. Omnis id et, laudantium, sit culpa nesciunt
              reprehenderit hic autem aliquid enim corporis molestiae sunt in
              iusto animi provident quo repellendus dignissimos perspiciatis.
              Eaque exercitationem odit placeat ipsam veniam voluptates voluptas
              dolore mollitia ut repellat, iure voluptatem omnis! Voluptatem ut
              quidem assumenda quia ipsum blanditiis saepe atque animi
              reiciendis minus, earum maxime est mollitia illum perferendis iure
              culpa! Vel, nobis blanditiis repellendus assumenda fuga harum
              nulla exercitationem nesciunt laudantium doloribus molestiae natus
              dolorem pariatur error delectus reiciendis provident, incidunt
              aut? Quos atque, enim est nostrum culpa ut corporis explicabo
              doloremque blanditiis modi, doloribus itaque repudiandae incidunt?
              Sequi porro ex aliquid aspernatur ad laboriosam iure nobis quasi
              ab labore, laborum ipsam accusantium architecto laudantium
              corrupti! Quam magni eos laborum accusantium cum impedit
              asperiores molestias nostrum at omnis, ducimus maiores perferendis
              a fugit voluptatem assumenda totam beatae earum ad voluptate. Quam
              possimus perspiciatis atque vitae ducimus mollitia odio, aperiam
              vel magni iure rerum. Harum similique natus qui reiciendis.
              Accusamus tempore soluta non tempora corporis inventore atque.
              Sint, accusantium officiis rem impedit saepe quaerat. Atque neque
              iusto pariatur deserunt, nemo nihil quidem? Veniam hic, minus
              dolores aperiam eveniet repellat delectus, cumque quos quaerat
              impedit nam eius qui maxime, itaque doloribus tempora quam in. At
              dolorem fugiat, animi, veniam excepturi iusto sed nobis nulla
              totam ducimus sapiente vel consequatur harum maiores odit culpa
              voluptates delectus? Obcaecati nulla distinctio consectetur, ipsa,
              aperiam repellat accusamus odio hic laudantium aliquid tempora! Ab
              commodi odit molestias, distinctio alias sunt placeat in
              voluptatum asperiores architecto ipsam eaque veniam quas sequi
              amet quis consequuntur nemo corrupti ipsa, nam culpa
              exercitationem nisi maiores. Officia exercitationem fugit ipsum
              mollitia eius. Sed architecto earum ex, officiis vitae ducimus
              quia quo nihil totam accusantium culpa officia quae sapiente
              laborum commodi maiores quaerat, excepturi voluptatibus recusandae
              eveniet. Quia accusamus suscipit iusto esse. Labore earum sunt
              nulla ullam velit consectetur aut quisquam autem doloribus
              impedit. Magnam dolorum, est consectetur at molestiae ad, nobis
              ipsam, expedita exercitationem corporis suscipit dolore iure
              doloribus odio iusto odit! Doloribus quo ullam perspiciatis
              reprehenderit accusamus sequi fugit consectetur itaque fugiat
              autem. Adipisci temporibus, distinctio perspiciatis totam minima
              tempore quisquam nam accusamus aliquam non perferendis et odit
              provident assumenda quis autem tempora dolorem, eaque error optio
              dignissimos ab cumque. Sunt facilis qui expedita assumenda,
              voluptatibus magnam deleniti tenetur numquam harum deserunt
              mollitia itaque blanditiis accusantium illum ab eveniet tempora
              ipsam amet saepe? Porro ducimus illum dolorum? Mollitia
              perspiciatis ea cum aut dolore cupiditate quis, quasi incidunt
              ratione, optio perferendis officiis et eaque error, nihil veniam
              expedita laudantium distinctio praesentium. Odio harum consequatur
              dolor quidem unde cumque suscipit, impedit modi velit temporibus
              eveniet adipisci beatae voluptate odit quasi ex ipsum incidunt
              numquam, ullam illo. Modi aperiam quos qui quia sed quae, dicta
              pariatur assumenda voluptate vero omnis ex autem atque?
              Voluptatibus deserunt ipsa, labore similique laborum sapiente
              perferendis praesentium magnam rem optio eos possimus corrupti
              distinctio commodi hic reprehenderit et? Fugit commodi illo
              mollitia earum ipsa possimus natus et aperiam consequuntur, saepe
              aspernatur consequatur amet officia optio repellat assumenda
              maxime! Magni cum deleniti accusamus voluptatibus magnam quidem
              ducimus, placeat repellat veritatis pariatur voluptas praesentium,
              ipsa possimus nisi vitae nesciunt quasi perferendis maiores
              facilis excepturi, corporis aut odio enim ratione. Eaque quasi
              voluptate quod nihil eligendi nesciunt, fugit velit ullam sunt
              nulla provident voluptas quos alias repudiandae asperiores vel in
              accusamus voluptatibus laudantium ipsa quibusdam pariatur ad ipsum
              molestiae. Quidem saepe dolor consectetur vero, temporibus aliquid
              ducimus voluptates porro id odio pariatur ratione, eaque ea. Ea
              commodi deserunt odit velit nam saepe explicabo at asperiores,
              consequatur alias laboriosam cupiditate cum tempore eum ipsam
              nihil atque nemo, voluptas ratione eius rerum! Ipsam reprehenderit
              voluptate eum voluptas qui illum, distinctio, velit dicta non ex
              inventore iste facere magni, nulla hic sapiente quibusdam repellat
              sint sunt at assumenda culpa harum natus? Quasi consectetur vel
              eum repellendus explicabo molestias provident quisquam voluptatum,
              illum fuga porro quo quos hic, commodi dolorem. Cum libero sit hic
              reprehenderit perspiciatis ullam dolore, dicta reiciendis ut
              porro, quaerat fugiat illum earum nesciunt enim nihil ducimus
              soluta. Provident neque eveniet quas deserunt aliquid esse
              sapiente assumenda. Id, nulla quam? Ipsum excepturi assumenda
              earum laborum. Eius, sed veritatis id praesentium, incidunt
              consectetur ipsum mollitia illo aliquid voluptate illum? Fuga,
              eveniet fugiat sunt quas nostrum laudantium cupiditate magnam
              doloremque impedit officia suscipit aspernatur. Porro non officiis
              architecto laborum rerum sunt sint nemo sequi illo enim ipsa
              maxime cumque assumenda, alias aut nulla qui ipsum quod sit
              perspiciatis aliquid. Sequi magnam ipsum maxime quo esse nihil
              laboriosam in itaque. Maiores velit, esse autem impedit eveniet
              nisi veniam earum fugit ut ipsa quidem nihil. Fugit fuga minima,
              dolorem consectetur magni aliquid veniam dolore tempora!
            </p>
            <div className="comment-box">
              <h2>Comments</h2>
              <div className="comment-list">
                {comments.map((comment, index) => (
                  <div key={index} className="comment">
                    <p className="comment-text">{comment}</p>
                    <p className="comment-author">Author: John Doe</p>
                  </div>
                ))}
              </div>
              <div className="comment-form">
                <h3>Add a Comment</h3>
                <textarea
                  rows={4}
                  placeholder="Write your comment here..."
                  value={newComment}
                  onChange={handleCommentChange}></textarea>
                <button onClick={handleCommentSubmit}>Submit Comment</button>
              </div>
            </div>
          </div>
        </div>
        <div className="right-column">
          <div className="post-list">
            <h2>Post List</h2>
            <div className="most-popular-posts">
              <h3>Most Popular Posts</h3>
              {/* Add popular posts here */}
            </div>
            <div className="topics">
              <h3>Topics</h3>
              {/* Add topics here */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetail;
