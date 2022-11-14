import { motion } from "framer-motion";
import React, { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";

const App = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen(!open);
  return (
    <section>
      <motion.div className="bg-blue-300 p-5">Hello World</motion.div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/school" element={<School />} />
        <Route path="/maps" element={<Maps />} />
        <Route path="/account" element={<Account />} />
      </Routes>
      <motion.div
        className="fixed w-full h-screen -bottom-[95%] overflow-hidden text-justify z-0 "
        drag="y"
        dragConstraints={{ left: 0, right: 0, top: -600, bottom: 0 }}
        dragElastic={0.8}
        dragMomentum={false}
      >
        <div className="flex justify-center items-center p-5 open-menu ">
          <div className="bg-black w-5 -m-1 h-1 rounded-full -rotate-45" />
          <div className="bg-black w-5 -m-1 h-1 rounded-full rotate-45" />
        </div>
        <nav className="p-5 gap-7 flex items-center bg-white z-50 shadow-[0_0_5px_rgba(0,0,0,0.7)] overflow-auto">
          <Link to="/" className=" flex flex-col items-center ">
            <i className="fas fa-home" /> Home
          </Link>
          <Link to="/school" className=" flex flex-col items-center">
            <i className="fas fa-school" />
            School
          </Link>
          <div onClick={handleClick} className=" flex flex-col items-center">
            <i className="fas fa-map-signs" />
            Maps
          </div>
          <div
            onClick={() => alert("test")}
            className=" flex flex-col items-center"
          >
            <i className="fas fa-user-circle" /> Account
          </div>
          <Link to="/" className=" flex flex-col items-center ">
            <i className="fas fa-home" /> Home
          </Link>
          <Link to="/school" className=" flex flex-col items-center">
            <i className="fas fa-school" />
            School
          </Link>
          <div onClick={handleClick} className=" flex flex-col items-center">
            <i className="fas fa-map-signs" />
            Maps
          </div>
          <div
            onClick={() => alert("test")}
            className=" flex flex-col items-center"
          >
            <i className="fas fa-user-circle" /> Account
          </div>
        </nav>
        <section className="overflow-scroll h-full w-full bg-gray-300 p-5 pb-56">
          <div className="overflow-auto">
            {open ? (
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                expedita itaque exercitationem delectus iste nulla, optio,
                similique officia doloribus maiores totam accusantium dolorem
                nisi doloremque dolor consequatur eum repellendus incidunt!
                Adipisci alias dolorum sed doloremque ratione obcaecati vel
                laboriosam reiciendis dicta optio quae, corrupti reprehenderit!
                Corrupti, dolorem nemo possimus a, qui
              </p>
            ) : (
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda laboriosam accusamus ut molestias adipisci tempore
                quis amet inventore libero deleniti sint soluta, natus eveniet
                perspiciatis nobis? Repellat eos rerum odio quae ab itaque
                maiores! Magnam, quisquam nisi eius quibusdam iste nihil,
                exercitationem cupiditate debitis eos quae distinctio. Repellat
                voluptatibus cupiditate, eum possimus adipisci ipsam quod at
                ratione asperiores voluptatem, molestias minima reprehenderit,
                error ab. Optio accusantium eius totam fuga, cum beatae ea
                blanditiis doloribus dolore, velit quia at aut aperiam officiis
                maiores voluptates labore consectetur omnis, soluta similique.
                Alias ipsa facere blanditiis placeat facilis fugiat doloremque
                ab corrupti accusantium itaque, quasi quis id praesentium vitae
                quia magnam pariatur! Facilis omnis alias reprehenderit ad
                minima? Nesciunt debitis mollitia consequuntur fugit adipisci,
                voluptatem placeat dolores iure nemo. Perspiciatis eius
                veritatis reiciendis distinctio consequatur ab hic eveniet
                cumque dolore laboriosam nam quaerat numquam accusantium quos
                ipsum non libero officiis odio voluptatem mollitia impedit,
                optio voluptatibus iure nobis. Fuga consectetur in doloremque
                veniam commodi amet repudiandae voluptas obcaecati, esse illum
                cumque labore odit a ad similique aperiam dolore asperiores
                recusandae inventore tenetur numquam? Aspernatur quaerat eum
                enim nulla ducimus sed, ratione voluptatum, distinctio aut
                cumque qui. Maxime dolor voluptas incidunt saepe asperiores
                laboriosam ipsam, iste, dolorum culpa ratione officia id
                veritatis, mollitia illo beatae sit minus quaerat eos. Similique
                sapiente, suscipit velit quam, perferendis tempore aliquam
                dolor, asperiores qui sint quo possimus aut! Dolorem minus sint
                ducimus atque ex voluptates ab veniam praesentium reprehenderit
                voluptatum ea voluptatem accusantium, ullam alias. Cupiditate
                quis vitae explicabo fugit. A totam natus provident excepturi
                esse, fugiat accusamus consequuntur culpa tempore nulla
                consequatur corrupti quam dolore consectetur libero in non
                pariatur deleniti delectus. Molestiae vel illum maiores harum
                eos illo nihil nulla numquam officia libero facere beatae atque
                tenetur quaerat unde deserunt error corporis assumenda saepe
                nemo sint placeat, non ullam. Modi doloribus dolore velit fuga
                inventore possimus? Possimus eligendi doloremque et temporibus
                libero in blanditiis autem excepturi deserunt, consequatur,
                praesentium soluta itaque repellat minima modi tenetur quasi
                molestiae, placeat similique. Architecto alias earum facilis
                quibusdam possimus aperiam fugiat voluptatum maiores corporis
                dicta aliquid, nisi suscipit vitae nesciunt accusamus. Impedit
                consequatur laborum ipsa numquam quo in pariatur quas
                laboriosam, cumque animi vero eius totam id fugiat, ullam
                suscipit minus exercitationem placeat rerum voluptatum corporis,
                quidem modi! Repellendus dicta mollitia corrupti nihil
                perspiciatis. Fugiat, amet cupiditate! Blanditiis minima dolorum
                mollitia minus quae dolores veniam unde expedita ut doloribus
                magnam ea sed consectetur quibusdam animi facilis architecto
                quam saepe nisi, possimus corporis ipsam vitae labore? Illo
                dolorem reiciendis sapiente accusamus eius, voluptatibus esse
                corrupti porro quaerat quam quasi illum mollitia ipsa assumenda
                natus voluptas harum sint tempore! Neque vitae, atque sed
                nesciunt voluptatum in? Quasi sint quidem ipsam eos eius! Ipsam
                suscipit exercitationem, hic voluptatum ad culpa distinctio
                incidunt, tenetur quia assumenda repellendus commodi nulla?
                Fuga, quae delectus? Hic cupiditate corporis sapiente veritatis
                ex quam iste in ad ut, et quae, exercitationem eum excepturi
                doloremque, molestias repellat ipsa possimus! Porro earum
                dolores omnis expedita nesciunt rem neque laborum, provident
                fugit, veritatis officia quos incidunt sapiente totam culpa
                explicabo? Eaque vero consequatur maiores dolor dolores dolorum
                libero illo explicabo laudantium non ut, recusandae provident
                inventore ad vel aperiam neque corporis repellat. Officia
                accusantium quidem dolorum voluptas consequatur aut perferendis,
                inventore maxime dolore molestiae quis architecto accusamus
                explicabo eius nobis dolor similique odio assumenda?
                Consequuntur odio facilis minus mollitia accusantium itaque
                placeat officia cumque quasi velit aliquam illo officiis hic
                modi harum ipsa iste, quam tenetur voluptates consequatur natus
                dolore. Sunt soluta eveniet natus in fugiat beatae nisi
                voluptatum, quibusdam dolorum eum, architecto possimus quam
                fugit ipsam libero ipsum nostrum. Sit harum, labore nemo ipsam
                sed et quasi tenetur corrupti, repellendus, fuga mollitia
                molestiae nihil cumque earum reiciendis consequuntur dignissimos
                amet assumenda consectetur enim. Molestias vel molestiae
                consequuntur repudiandae architecto totam, voluptas placeat
                officia ad optio nihil eos expedita odio nostrum ipsum vitae
                doloremque aut eum quae culpa amet. Molestiae laudantium
                necessitatibus velit nisi dignissimos corrupti? Eveniet ipsam,
                iusto quas atque aliquid amet inventore perferendis tempora
                veniam ratione distinctio velit eaque nisi rem magnam, quibusdam
                sint, doloribus qui ut ullam optio explicabo alias maxime. Vel
                beatae est similique possimus optio suscipit eius soluta nemo,
                quisquam commodi qui nulla incidunt voluptate. Ipsa voluptates
                maxime suscipit eligendi unde ad sed ipsam sapiente officiis,
                debitis recusandae cumque pariatur necessitatibus, amet aperiam
                obcaecati vitae dolores sunt! Perspiciatis impedit neque totam
                molestiae unde temporibus eligendi aliquam ex natus possimus?
                Cum doloremque eos ex? Earum modi dicta illum excepturi ipsa
                iure non sapiente eligendi facilis. Vero velit tenetur cum ab
                illum. Necessitatibus quasi animi tempora ullam voluptatibus
                accusantium maxime corrupti fugiat blanditiis nesciunt eos modi
                fugit, molestias corporis adipisci culpa, cupiditate
                reprehenderit placeat dolore? At officiis sit ratione nisi enim
                porro quis repellendus natus. Voluptatem quisquam repudiandae
                consequuntur maxime rerum voluptates quaerat corrupti minus,
                facilis autem mollitia ullam nisi minima distinctio reiciendis
                sapiente aliquid illum incidunt. Aperiam laborum nobis quidem
                reiciendis ipsam. Quam exercitationem labore veritatis
                perferendis quasi repellendus debitis, omnis commodi suscipit
                dolorem officiis facilis sunt laudantium aliquam rerum magni
                tempore. Temporibus accusamus cumque veritatis alias suscipit
                deleniti tempore reiciendis assumenda dolore aut quidem libero
                rem ducimus voluptates quod ea omnis facere, quae tempora
                consectetur eos, magnam mollitia voluptatum ut! Provident odio
                exercitationem autem suscipit molestiae accusamus quam quis
                ratione expedita odit. Vel, error? Fugiat esse cupiditate
                laboriosam explicabo voluptate vero officiis dolorum expedita
                consectetur culpa tenetur, harum voluptates alias molestias
                animi soluta ipsum nulla, obcaecati, id veritatis doloremque
                necessitatibus provident. A adipisci magnam dicta consequuntur
                dignissimos quas placeat, porro sunt illo nulla inventore
                nostrum eligendi totam dolorem perferendis est mollitia error
                cupiditate itaque iure ducimus aliquam soluta. Officia aut
                dolores dignissimos fugiat doloribus voluptatem fuga adipisci
                illum nesciunt enim, repudiandae aliquid autem ut sit incidunt
                amet ipsum consequatur reprehenderit pariatur non? Debitis ab,
                aliquid quos molestiae eveniet, nemo reprehenderit natus
                veritatis veniam dolores quia? Molestias quasi aliquid alias
                numquam veritatis, illo minima repudiandae. Magnam nesciunt
                accusantium, quibusdam adipisci rerum ipsum amet laborum nobis
                alias ipsam molestiae aliquam doloremque suscipit sequi maiores
                sint harum distinctio soluta nihil qui.
              </p>
            )}
          </div>
        </section>
      </motion.div>
    </section>
  );
};

export default App;

const Maps = () => {
  return (
    <div>
      <img
        className="w-full h-full"
        src="https://i.pinimg.com/originals/49/48/68/49486834fdc9a9e09f79b4eb0043f45c.jpg"
        alt="map"
      />
    </div>
  );
};

const School = () => {
  return (
    <div>
      <img
        className="w-full h-full"
        src="https://img.freepik.com/free-vector/large-school-building-scene_1308-32058.jpg?w=2000"
        alt="map"
      />
    </div>
  );
};

const Account = () => {
  return (
    <div>
      <img
        className="w-full h-full"
        src="https://about.fb.com/wp-content/uploads/2020/09/NRP-Privacy_Matters_Account_Center_V7_JCh-01-1.jpg?fit=1921%2C1080"
        alt="map"
      />
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <img
        className="w-full h-full"
        src="https://play-lh.googleusercontent.com/5rS-un965hkZuqUNA65RwkeqmGko91DVQHlAMCQ9lJlNguvXkCQzjl6OgAMOPZ2cCk4"
        alt="map"
      />
    </div>
  );
};
