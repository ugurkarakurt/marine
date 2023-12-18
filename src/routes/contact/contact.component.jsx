import React, { useContext, useEffect } from 'react';
import PageContent from '../../components/page-content/page-content.component';
import { ColorsContext } from '../../context/colors.context';

const Contact = () => {
  const { colors, setColors } = useContext(ColorsContext);

  useEffect(() => {
    setColors({ ...colors, backgroundColor: "linear-gradient(to right, #243B55, #141E30)", textColor: "rgba(255,255,255, .8)" })
  }, []);
  return (
    <PageContent
      bannerText={"CONTACTS"}
      pageTitle={"CONTACTS:"}
      pageContent={"Evliya Celebi Mah., Ucar Sokak, No:4/A, 34944, Tuzla / Istanbul / Türkiye.<br/><table><tbody><tr><th>Tel: </th><td>+90 216 784 3366</td></tr><tr><th>Mob:</th><td>+90 0535 670 0485</td></tr><tr><th>Email: </th><td>sales@asapmar.com</td></tr></tbody></table>Memberships: <br/>IMPA<br/>SHIPSERV<br/>"}
      colors={colors}
    />

  );
}

export default Contact;
