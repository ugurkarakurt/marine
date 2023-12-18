import React from 'react';
import { Container, ContentWrapper, StickyContent } from "./page-content.styles";
import PageContentBanner from '../../components/page-content-banner/page-content-banner.component';
import Image from "../../components/banner-image/wave.jpg"

const PageContent = ({ colors }) => {
  const { backgroundColor, textColor, titleColor } = colors;

  console.log(textColor);

  return (
    <Container $backgroundcolor={backgroundColor}>
      <ContentWrapper>
        <PageContentBanner img={Image} text={"Our Products"} />
        <StickyContent>
          <h2 titleColor={titleColor}>Lorem IPSUM</h2>
          <p textColor={textColor}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur inventore sequi alias, repellat sed esse, illum eos tempore perferendis unde laborum. Natus, ut! Voluptates quam nisi modi ea, eligendi tempore?</p>
          <p textColor={textColor}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident fuga tempore at cumque fugit ullam voluptatem labore magni accusamus facilis. Ipsa aspernatur autem consequuntur facilis nesciunt in reiciendis tempora accusamus.
            Sint debitis, illo aut optio vitae architecto reiciendis incidunt ducimus nam dolorum quam quae quo cupiditate pariatur fuga mollitia, iste deleniti nesciunt maxime quasi aliquid! Veniam aperiam magnam recusandae. Tempore?
            Velit quia commodi suscipit veritatis repellat, repellendus soluta laudantium corporis. Harum iusto saepe ex porro vero voluptatem rem dignissimos ea? At, perspiciatis rerum? Impedit, commodi repellat in modi excepturi laudantium.
            Pariatur harum dolore itaque velit doloribus maxime ab nulla laboriosam aliquam error modi cum quas aperiam excepturi beatae odio facilis inventore quae, voluptatum consequuntur cupiditate architecto dicta eveniet dolores. Inventore.
            Quibusdam consectetur optio aspernatur error expedita. Minus eveniet quisquam harum vitae eligendi voluptatem quos ex, animi nisi eum esse voluptatum consectetur necessitatibus vel amet obcaecati nihil quas dicta optio deleniti?
            Perspiciatis at culpa pariatur ducimus ea nesciunt eos recusandae quod beatae in, temporibus magnam ipsam officia dolorem amet natus fuga cumque praesentium voluptates facere error. Minus veniam hic aliquid architecto!
            Voluptate, omnis. Accusantium at cumque, id blanditiis perferendis beatae. Aspernatur quasi non, molestias iste tempore hic voluptate labore voluptatibus accusantium sit maiores aut sapiente aperiam, voluptatum perspiciatis. Neque, error. Debitis?
            Voluptates, labore! Aliquid inventore eligendi debitis fuga? Molestias dignissimos quae saepe, obcaecati incidunt ratione repudiandae perferendis totam expedita veritatis quibusdam natus id fugiat ex. Molestias fugiat minus ullam autem in!
            Sint consequatur id doloremque? Eius provident beatae deserunt, vitae eveniet esse hic voluptate inventore ducimus aspernatur deleniti itaque, ipsa repudiandae similique labore suscipit qui accusamus quia libero reiciendis dolor facere?
            Et veritatis vel dolore eveniet, hic, nostrum, saepe harum maiores quia omnis iste veniam quisquam repellat doloribus illo consequuntur similique facilis fugit est magni quis autem reiciendis! Laborum, doloribus provident!</p>
          <p textColor={textColor}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro tenetur aliquam explicabo esse ipsam repudiandae nihil officia sequi quisquam id, est consectetur nisi ad. Quo eos illum pariatur accusamus ipsa!
            Quod quam omnis officiis recusandae a. Modi ipsum ratione, nobis pariatur nulla aspernatur adipisci iste vitae hic voluptatem nihil voluptates tenetur quidem enim, similique magni incidunt nemo natus officiis iusto.
            Non neque voluptatem, molestiae necessitatibus, quam repellendus temporibus architecto tenetur repudiandae magni deserunt dolorum quibusdam expedita porro exercitationem consectetur veritatis eum velit! Deleniti error beatae ipsum cumque recusandae cum asperiores.
            Suscipit at consequuntur fuga doloribus tempore qui et, consequatur ex mollitia quisquam quas rem temporibus ea. Temporibus magni corrupti nulla deleniti modi voluptatibus voluptates velit. Tempore natus expedita exercitationem! Esse.
            Hic ducimus doloremque cupiditate sed maiores facere consectetur deserunt dignissimos. Amet reprehenderit molestiae aut perferendis quam, labore non sed, quas, nulla libero deleniti. Nihil, ex. Dignissimos, veniam quisquam? Beatae, quasi!
            Dolor dolores esse similique molestias. Dicta quo, consequatur quaerat aperiam, aliquam id quidem dolorem dignissimos libero necessitatibus earum delectus quod ad iste architecto nisi! Commodi accusamus voluptas ea ullam ipsum.</p>
        </StickyContent>
      </ContentWrapper>
    </Container>
  );
}

export default PageContent;
