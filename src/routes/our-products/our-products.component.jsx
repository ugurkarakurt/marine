import React, { useEffect } from 'react';
import PageContent from '../../components/page-content/page-content.component';
import { useContext } from 'react';
import { ColorsContext } from '../../context/colors.context';

const OurProducts = () => {

  const { colors, setColors } = useContext(ColorsContext);

  useEffect(() => {
    setColors({ ...colors, backgroundColor: "linear-gradient(to right, #243B55, #141E30)", textColor: "rgba(255,255,255, .8)" })
  }, []);

  return (
    <PageContent colors={colors} />
  );
}

export default OurProducts;
