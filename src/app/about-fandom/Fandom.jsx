import carouselPics from '../assets/CaroucelPics';
import { AboutFragment } from '../components/fragments/AboutFragment';

export default () => {
  return (
    <AboutFragment
      title="About The Fandom"
      pic={carouselPics[1]}
      paragraph1={`
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea eveniet quis soluta earum nesciunt ipsum perferendis expedita at error veritatis ratione rem mollitia qui eum enim ipsa, harum optio. Rerum, maiores? Veniam veritatis
          aliquid voluptas, deleniti, recusandae dolorem culpa ratione repudiandae est cupiditate id, nisi fugit consequatur! Facilis exercitationem, labore similique ratione beatae atque doloremque fugiat explicabo eius molestiae, hic quas
          maiores dolorum est enim tempora laborum accusantium optio fugit, perspiciatis quod adipisci vitae asperiores. Esse neque debitis delectus aliquid magnam similique, nesciunt veniam iure magni nulla? Eaque dolorum blanditiis
          deserunt laboriosam vel doloremque facilis est dicta labore maiores tempore quasi aspernatur quia totam perspiciatis placeat, minima deleniti! Quasi, dolorum.
        `}
      paragraph2={`
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga voluptatum voluptates optio qui minus at delectus officia recusandae necessitatibus unde sed cumque harum nihil molestiae corrupti a facilis tenetur sunt dolorem,
          exercitationem, suscipit magnam error in dicta. Perferendis alias fugiat laudantium rerum harum?
        `}
      paragraph3={`
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quae mollitia vel provident sed magni porro omnis corporis nostrum explicabo nam, exercitationem cupiditate non nobis quod enim eligendi blanditiis autem recusandae.
          Nostrum voluptas odit, quo ex saepe totam animi iusto corporis porro minima.
        `}
      paragraph4={`
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, expedita! Molestiae ex cum alias cupiditate vel similique modi illo, assumenda nostrum dolorem at nesciunt. Molestias provident iusto mollitia voluptas odit
          vel. Maxime, atque. Laboriosam sit deleniti consectetur molestias incidunt repellat iure, consequatur doloremque.
        `}
      paragraph5={`
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo nobis, incidunt autem laudantium numquam iure cum molestiae optio. Qui ea minima amet laborum dolorem repudiandae quia quam exercitationem libero voluptatibus,
          pariatur a?
        `}
    />
    // <div className="flex flex-col items-center justify-center gap-4 min-h-screen p-3">
    //   <h1>halaman about fandom</h1>
    //   <div className="text-justify p-4 gap-2">
    //     <div className="flex justify-center md:block">
    //       <img
    //         src={carouselPics[1]}
    //         alt="coba"
    //         className="md:float-left mr-4 mb-4 w-48 h-48 object-cover rounded-lg shadow-lg"
    //       />
    //     </div>
    //     <p>
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente corporis debitis distinctio commodi officia quisquam, molestias eligendi nostrum laudantium dolor provident, autem eaque tenetur adipisci incidunt unde ut
    //       repellendus dolore voluptas doloribus ad natus! Voluptates veritatis voluptas blanditiis odio beatae facilis dolorem odit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ipsam unde itaque repellendus illum
    //       commodi quia blanditiis iusto quam id magni, sapiente nobis hic cupiditate quo consequuntur ducimus consequatur. Maxime, facere asperiores.
    //     </p>
    //     <p>
    //       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis aliquid est, eveniet sint eaque eligendi ut nobis voluptate repellat at illum repellendus exercitationem saepe perspiciatis dolor beatae alias aut culpa cumque ipsa
    //       unde!
    //     </p>
    //     <p>
    //       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis aliquid est, eveniet sint eaque eligendi ut nobis voluptate repellat at illum repellendus exercitationem saepe perspiciatis dolor beatae alias aut culpa cumque ipsa
    //       unde!
    //     </p>
    //   </div>
    //   <div className="flex gap-2">
    //     <Link
    //       href={'https://instagram.com/jkt48.daisy'}
    //       className="btn btn-secondary rounded-full hover:btn-accent hover:cursor-pointer"
    //       target="_blank"
    //     >
    //       Instagram
    //     </Link>
    //     <Link
    //       href={'https://x.com/Daisy_JKT48'}
    //       className="btn btn-secondary rounded-full hover:btn-accent hover:cursor-pointer"
    //       target="_blank"
    //     >
    //       X (Twitter)
    //     </Link>
    //     <Link
    //       href={'https://tiktok.com/daisyjkt48'}
    //       className="btn btn-secondary rounded-full hover:btn-accent hover:cursor-pointer"
    //       target="_blank"
    //     >
    //       Tiktok
    //     </Link>
    //   </div>
    // </div>
  );
};
