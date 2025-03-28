import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight, X, Building2, Ruler, Building, Award, CheckCircle2, Users, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../context/LanguageContext';
import t1 from '../assets/images/t1.jpg';
import t3 from '../assets/images/t3.jpg';
import t4 from '../assets/images/t4.jpg';
import t5 from '../assets/images/t5.jpg';
import t6 from '../assets/images/t6.jpg';
import t7 from '../assets/images/t7.jpg';
import q1 from '../assets/images/q1.jpg';
import full5 from '../assets/images/full5.jpg';
import qq5 from '../assets/images/qq5.jpg';
import tt1 from '../assets/images/tt1.jpg';
import ee3 from '../assets/images/ee3.jpg';
import house2 from '../assets/images/house2.jpg';
import pou3 from '../assets/images/pou3.jpg';
import con2 from '../assets/images/con2.jpg';
import ik4 from '../assets/images/ik4.jpg';
import aa1 from '../assets/images/aa1.jpg';
import qq3 from '../assets/images/qq3.jpg';
import lop from '../assets/images/lop.png';
import lop2 from '../assets/images/lop2.jpg';
import ad from '../assets/images/ad.jpg';
import af from '../assets/images/af.jpg';
import ag from '../assets/images/ag.jpg';
import ah from '../assets/images/ah.jpg';
import aj from '../assets/images/aj.jpg';
import ak from '../assets/images/ak.jpg';
import al from '../assets/images/al.jpg';
import as1 from '../assets/images/as.jpg';
import m from '../assets/images/m.jpg';
import n from '../assets/images/n.jpg';
import b from '../assets/images/b.jpg';
import v from '../assets/images/v.jpg';
import c from '../assets/images/c.jpg';
import x from '../assets/images/x.jpg';
import z from '../assets/images/z.jpg';
import f1 from '../assets/images/f1.jpg';
import f2 from '../assets/images/f2.jpg';
import f3 from '../assets/images/f3.jpg';
import to from '../assets/images/to.png';
import to1 from '../assets/images/to1.jpg';
import t2 from '../assets/images/t2.jpg';
import t8 from '../assets/images/t8.jpg';
import t9 from '../assets/images/t9.jpg';
import t10 from '../assets/images/t10.jpg';
import VelvetSkins2 from '../assets/images/VelvetSkins2.jpg';
import VelvetSkins3 from '../assets/images/VelvetSkins3.jpg';
import VelvetSkins4 from '../assets/images/VelvetSkins4.jpg';
import VelvetSkins5 from '../assets/images/VelvetSkins5.jpg';
import VelvetSkins6 from '../assets/images/VelvetSkins6.jpg';
import VelvetSkins7 from '../assets/images/VelvetSkins7.jpg';
import VelvetSkins8 from '../assets/images/VelvetSkins8.jpg';
import VelvetSkins9 from '../assets/images/VelvetSkins9.jpg';
import VelvetSkins10 from '../assets/images/VelvetSkins10.jpg';
import VelvetSkins11 from '../assets/images/VelvetSkins11.jpg';
import VelvetSkins12 from '../assets/images/VelvetSkins12.jpg';
import VelvetSkins13 from '../assets/images/VelvetSkins13.jpg';
import VelvetSkins14 from '../assets/images/VelvetSkins14.jpg';
import VelvetSkins15 from '../assets/images/VelvetSkins15.jpg';
import VelvetSkins16 from '../assets/images/VelvetSkins16.jpg';
import houseMaroneia from '../assets/images/houseMaroneia.jpg';
import houseMaroneia2 from '../assets/images/houseMaroneia2.jpg';
import houseMaroneia3 from '../assets/images/houseMaroneia3.jpg';
import houseMaroneia4 from '../assets/images/houseMaroneia4.jpg';
import houseMaroneia5 from '../assets/images/houseMaroneia5.jpg';
import threeStorybuilding from '../assets/images/three-storybuilding.jpg';
import threeStorybuilding2 from '../assets/images/three-storybuilding2.jpg';
import threeStorybuilding3 from '../assets/images/three-storybuilding3.jpg';
import threeStorybuilding4 from '../assets/images/three-storybuilding4.jpg';
import roofdetachedhouse from '../assets/images/roofdetachedhouse.jpg';
import roofdetachedhouse2 from '../assets/images/roofdetachedhouse2.jpg';
import roofdetachedhouse3 from '../assets/images/roofdetachedhouse3.jpg';
import roofdetachedhouse4 from '../assets/images/roofdetachedhouse4.jpg';
import roofdetachedhouse5 from '../assets/images/roofdetachedhouse5.jpg';
import roofdetachedhouse6 from '../assets/images/roofdetachedhouse6.jpg';
import groundFloorHolidayHomes from '../assets/images/ground-floor_holiday_homes.jpg';
import groundFloorHolidayHomes2 from '../assets/images/ground-floor_holiday_homes2.jpg';
import groundFloorHolidayHomes3 from '../assets/images/ground-floor_holiday_homes3.jpg';
import groundFloorHolidayHomes4 from '../assets/images/ground-floor_holiday_homes4.jpg';
import groundFloorHolidayHomes5 from '../assets/images/ground-floor_holiday_homes5.jpg';
import groundFloorHolidayHomes6 from '../assets/images/ground-floor_holiday_homes6.jpg';
import groundFloorHolidayHomes7 from '../assets/images/ground-floor_holiday_homes7.jpg';
import houseAtArogiRodopi from '../assets/images/house_at_Arogi_Rodopi.jpg';
import houseAtArogiRodopi2 from '../assets/images/house_at_Arogi_Rodopi2.jpg';
import houseAtArogiRodopi3 from '../assets/images/house_at_Arogi_Rodopi3.jpg';
import houseAtArogiRodopi4 from '../assets/images/house_at_Arogi_Rodopi4.jpg';
import houseAtArogiRodopi5 from '../assets/images/house_at_Arogi_Rodopi5.jpg';
import houseAtArogiRodopi6 from '../assets/images/house_at_Arogi_Rodopi6.jpg';
import houseAtArogiRodopi7 from '../assets/images/house_at_Arogi_Rodopi7.jpg';
import houseAtArogiRodopi8 from '../assets/images/house_at_Arogi_Rodopi8.jpg';
import houseAtArogiRodopi9 from '../assets/images/house_at_Arogi_Rodopi9.jpg';
import houseAtArogiRodopi10 from '../assets/images/house_at_Arogi_Rodopi10.jpg';
import SmallRentalApartments1 from '../assets/images/Small_Rental_apartments1.jpg';
import SmallRentalApartments2 from '../assets/images/Small_Rental_apartments2.jpg';
import SmallRentalApartments3 from '../assets/images/Small_Rental_apartments3.jpg';
import SmallRentalApartments4 from '../assets/images/Small_Rental_apartments4.jpg';
import SmallRentalApartments5 from '../assets/images/Small_Rental_apartments5.jpg';
import SmallRentalApartments6 from '../assets/images/Small_Rental_apartments6.jpg';
import MaroniaPlatanitis1 from '../assets/images/Maronia_Platanitis_beach.jpg';
import MaroniaPlatanitis2 from '../assets/images/Maronia_Platanitis_beach2.jpg';
import MaroniaPlatanitis3 from '../assets/images/Maronia_Platanitis_beach3.jpg';
import MaroniaPlatanitis4 from '../assets/images/Maronia_Platanitis_beach4.jpg';
import MaroniaPlatanitis5 from '../assets/images/Maronia_Platanitis_beach5.jpg';
import structureRepairEval1 from '../assets/images/structure_repair_evaluation.jpg';
import structureRepairEval2 from '../assets/images/structure_repair_evaluation2.jpg';
import structureRepairEval3 from '../assets/images/structure_repair_evaluation3.jpg';
import structureRepairEval4 from '../assets/images/structure_repair_evaluation4.jpg';
import structureRepairEval5 from '../assets/images/structure_repair_evaluation5.jpg';
import structureRepairEval6 from '../assets/images/structure_repair_evaluation6.jpg';
import structureRepairEval7 from '../assets/images/structure_repair_evaluation7.jpg';
import photorealismHouse1 from '../assets/images/Photorealism_of_house.jpg';
import photorealismHouse2 from '../assets/images/Photorealism_of_house2.jpg';
import photorealismHouse3 from '../assets/images/Photorealism_of_house3.jpg';
import photorealismHouse4 from '../assets/images/Photorealism_of_house4.jpg';
import photorealismHouse5 from '../assets/images/Photorealism_of_house5.jpg';
import photorealismHouse6 from '../assets/images/Photorealism_of_house6.jpg';
import photorealismHouse7 from '../assets/images/Photorealism_of_house7.jpg';
import constructionResidential from '../assets/images/Construction_residential_building.jpg';
import singleStoreyHouse1 from '../assets/images/single_storey_house.jpg';
import singleStoreyHouse2 from '../assets/images/single_storey_house2.jpg';
import singleStoreyHouse3 from '../assets/images/single_storey_house3.jpg';
import singleStoreyHouse4 from '../assets/images/single_storey_house4.jpg';
import penetronAdmix from '../assets/images/PenetronAdmix.jpg';
import constructionDetachedHouse1 from '../assets/images/Construction_detached_house_construction_progress.jpg';
import constructionDetachedHouse2 from '../assets/images/Construction_detached_house_construction_progress2.jpg';
import constructionDetachedHouse3 from '../assets/images/Construction_detached_house_construction_progress3.jpg';
import constructionDetachedHouse4 from '../assets/images/Construction_detached_house_construction_progress4.jpg';
import constructionDetachedHouse5 from '../assets/images/Construction_detached_house_construction_progress5.jpg';
import constructionDetachedHouse6 from '../assets/images/Construction_detached_house_construction_progress6.jpg';
import constructionDetachedHouse7 from '../assets/images/Construction_detached_house_construction_progress7.jpg';
import constructionDetachedHouse8 from '../assets/images/Construction_detached_house_construction_progress8.jpg';
import constructionHouseKomotini1 from '../assets/images/construction_house_Komotini.jpg';
import constructionHouseKomotini2 from '../assets/images/construction_house_Komotini2.jpg';
import constructionHouseKomotini3 from '../assets/images/construction_house_Komotini3.jpg';
import constructionHouseKomotini4 from '../assets/images/construction_house_Komotini4.jpg';
import summerResidenceComplex1 from '../assets/images/Summer_residence_complex.jpg';
import summerResidenceComplex2 from '../assets/images/Summer_residence_complex2.jpg';
import summerResidenceComplex3 from '../assets/images/Summer_residence_complex3.jpg';
import summerResidenceComplex4 from '../assets/images/Summer_residence_complex4.jpg';
import summerResidenceComplex5 from '../assets/images/Summer_residence_complex5.jpg';
import summerResidenceComplex6 from '../assets/images/Summer_residence_complex6.jpg';
import heightIncreaseKomotini from '../assets/images/Height_increase_Komotini.jpg';
import constructionOfDetachedHouse1 from '../assets/images/construction_of_a_detached_house.jpg';
import constructionOfDetachedHouse2 from '../assets/images/construction_of_a_detached_house2.jpg';
import constructionOfDetachedHouse3 from '../assets/images/construction_of_a_detached_house3.jpg';
import constructionOfPrivateProjects1 from '../assets/images/Construction_of_Private_Projects.jpg';
import constructionOfPrivateProjects2 from '../assets/images/Construction_of_Private_Projects2.jpg';
import constructionOfPrivateProjects3 from '../assets/images/Construction_of_Private_Projects3.jpg';
import constructionOfPrivateProjects4 from '../assets/images/Construction_of_Private_Projects4.jpg';
import mikelIkea1 from '../assets/images/mikel-ikea.jpg';
import mikelIkea2 from '../assets/images/mikel-ikea2.jpg';
import mikelIkea3 from '../assets/images/mikel-ikea3.jpg';
import mikelIkea4 from '../assets/images/mikel-ikea4.jpg';
import holidayGroundFloorResidences from '../assets/images/holiday_ground_floor_residences.jpg';
import damagesCausesRestorations1 from '../assets/images/damages_causes_restorations.jpg';
import damagesCausesRestorations2 from '../assets/images/damages_causes_restorations2.jpg';
import damagesCausesRestorations3 from '../assets/images/damages_causes_restorations3.jpg';
import damagesCausesRestorations4 from '../assets/images/damages_causes_restorations4.jpg';
import damagesCausesRestorations5 from '../assets/images/damages_causes_restorations5.jpg';
import damagesCausesRestorations6 from '../assets/images/damages_causes_restorations6.jpg';
import damagesCausesRestorations7 from '../assets/images/damages_causes_restorations7.jpg';
import constructionInProgress from '../assets/images/Construction_in_progress.jpg';
import cornerPlotUrbanHouse1 from '../assets/images/Corner_plot_urban_house.jpg';
import cornerPlotUrbanHouse2 from '../assets/images/Corner_plot_urban_house2.jpg';
import newBusinessSpace1 from '../assets/images/New_business_space.jpg';
import newBusinessSpace2 from '../assets/images/New_business_space2.jpg';
import newBusinessSpace3 from '../assets/images/New_business_space3.jpg';
import constructionProgress from '../assets/images/Construction_progress.jpg';
import insideConstruction1 from '../assets/images/inside_construction.jpg';
import insideConstruction2 from '../assets/images/inside_construction2.jpg';
import pastMultiStoreyProjects1 from '../assets/images/Past_multi_storey_projects.jpg';
import pastMultiStoreyProjects2 from '../assets/images/Past_multi_storey_projects2.jpg';
import pastMultiStoreyProjects3 from '../assets/images/Past_multi_storey_projects3.jpg';
import pastMultiStoreyProjects4 from '../assets/images/Past_multi_storey_projects4.jpg';
import pastMultiStoreyProjects5 from '../assets/images/Past_multi_storey_projects5.jpg';
import pastMultiStoreyProjects6 from '../assets/images/Past_multi_storey_projects6.jpg';
import pastMultiStoreyProjects7 from '../assets/images/Past_multi_storey_projects7.jpg';
import pastMultiStoreyProjects8 from '../assets/images/Past_multi_storey_projects8.jpg';
import pastMultiStoreyProjects9 from '../assets/images/Past_multi_storey_projects9.jpg';
import constructionSiteManagement1 from '../assets/images/Construction_site_management.jpg';
import constructionSiteManagement2 from '../assets/images/Construction_site_management2.jpg';
import constructionSiteManagement3 from '../assets/images/Construction_site_management3.jpg';
import constructionSiteManagement4 from '../assets/images/Construction_site_management4.jpg';
import constructionSiteManagement5 from '../assets/images/Construction_site_management5.jpg';
import constructionSiteManagement6 from '../assets/images/Construction_site_management6.jpg';
import constructionSiteManagement7 from '../assets/images/Construction_site_management7.jpg';
import constructionSiteManagement8 from '../assets/images/Construction_site_management8.jpg';
import constructionSiteManagement9 from '../assets/images/Construction_site_management9.jpg';
import olderProjects1 from '../assets/images/Older_projects.jpg';
import olderProjects2 from '../assets/images/Older_projects2.jpg';
import olderProjects3 from '../assets/images/Older_projects3.jpg';
import olderProjects4 from '../assets/images/Older_projects4.jpg';
import homeSectionBackground from '../assets/images/home_section_background.jpg';
import RenovationDetachedHouseCenter1 from '../assets/images/Renovation_of_a_detached_house_in_the_center.jpg';
import RenovationDetachedHouseCenter2 from '../assets/images/Renovation_of_a_detached_house_in_the_center2.jpg';
import RenovationDetachedHouseCenter3 from '../assets/images/Renovation_of_a_detached_house_in_the_center3.jpg';
import StoreShoppingCenter1 from '../assets/images/store_in_a_shopping_center.jpg';
import StoreShoppingCenter2 from '../assets/images/store_in_a_shopping_center2.jpg';
import StoreShoppingCenter3 from '../assets/images/store_in_a_shopping_center3.jpg';
import StoreShoppingCenter4 from '../assets/images/store_in_a_shopping_center4.jpg';
import StoreShoppingCenter5 from '../assets/images/store_in_a_shopping_center5.jpg';
import StoreShoppingCenter6 from '../assets/images/store_in_a_shopping_center6.jpg';
import StoreShoppingCenter7 from '../assets/images/store_in_a_shopping_center7.jpg';
import StoreShoppingCenter8 from '../assets/images/store_in_a_shopping_center8.jpg';
import StoreShoppingCenter9 from '../assets/images/store_in_a_shopping_center9.jpg';
import RenovationSecondDetachedHouseCenter1 from '../assets/images/Renovation_of_Second_detached_house_in_the_center.jpg';
import RenovationSecondDetachedHouseCenter2 from '../assets/images/Renovation_of_Second_detached_house_in_the_center2.jpg';
import RenovationSecondDetachedHouseCenter3 from '../assets/images/Renovation_of_Second_detached_house_in_the_center3.jpg';
import RenovationSecondDetachedHouseCenter4 from '../assets/images/Renovation_of_Second_detached_house_in_the_center4.jpg';
import RenovationSecondDetachedHouseCenter5 from '../assets/images/Renovation_of_Second_detached_house_in_the_center5.jpg';

type ProjectKey = `project${number}`;

interface CurrentSlides {
  [key: ProjectKey]: number;
}

interface ProjectImages {
  [key: ProjectKey]: string[];
}

const certifications = {
  el: {
    column1: [
      'Πιστοποιημένος Ελεγκτής Δόμησης. Για έργα της μεγαλύτερης κατηγορίας.',
      'Πιστοποιημένος Επιθεωρητής Καταλυμάτων. Για κατηγοριοποίηση ξενοδοχειακών μονάδων (αστεροποίηση) και ενοικιαζόμενων δωματίων (κλειδιά) από την <strong>TÜV Austria</strong>.',
      'Πιστοποίηση Επαγγελματικής Αναγνώρισης <strong>REV</strong> της <strong>TEGoVA</strong>.',
      'Πιστοποίηση <strong>ISO/IEC 17024</strong>.',
      'Διεκπεραίωση προγράμματος "<strong>Εξοικονομώ κατ\' Οίκον</strong>".',
      '<strong>Expert Valuer in Real Estate Property (REV) – TEGoVA</strong>.',
      'Πιστοποιημένη Εκτιμήτρια Ακινήτων, διεξάγοντας εκτιμήσεις σύμφωνα με τα Ευρωπαϊκά Πρότυπα.'
    ],
    column2: [
      '<strong>ΜΕΛΟΣ ΕΠΑΓΓΕΛΜΑΤΙΚΩΝ ΟΡΓΑΝΙΣΜΩΝ</strong>',
      'Εξειδίκευση σε <strong>Ενεργειακές Μελέτες και Επιθεωρήσεις</strong> βάσει <strong>ΚΕΝΑΚ</strong>.',
      'Μέλος του <strong>Συλλόγου Εκτιμητών Ελλάδος (Σ.ΕΚ.Ε.)</strong>.',
      'Συμμετοχή στην <strong>TEGoVA</strong>.',
      'Εμπειρία στις <strong>Εκτιμήσεις Ακινήτων</strong>, με συνεργασίες με διάφορες τράπεζες (Πανελλήνια, Ασπίς, Αγροτική, Πειραιώς).'
    ]
  },
  en: {
    column1: [
      'Certified Building Inspector. For projects of the highest category.',
      'Certified Accommodation Inspector. For categorization of hotel units (star rating) and rental rooms (keys) by <strong>TÜV Austria</strong>.',
      'Professional Recognition Certification <strong>REV</strong> of <strong>TEGoVA</strong>.',
      'Certification <strong>ISO/IEC 17024</strong>.',
      'Implementation of "<strong>Energy Saving at Home</strong>" program.',
      '<strong>Expert Valuer in Real Estate Property (REV) – TEGoVA</strong>.',
      'Certified Real Estate Appraiser, conducting valuations in accordance with European Standards.'
    ],
    column2: [
      '<strong>MEMBER OF PROFESSIONAL ORGANIZATIONS</strong>',
      'Specialization in <strong>Energy Studies and Inspections</strong> based on <strong>KENAK</strong>.',
      'Member of the <strong>Hellenic Valuers Association (HVA)</strong>.',
      'Participation in <strong>TEGoVA</strong>.',
      'Experience in <strong>Real Estate Valuations</strong>, with collaborations with various banks (Panellinia, Aspis, Agricultural, Piraeus).'
    ]
  }
};

const Home = () => {
  const { language } = useLanguage();
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentSlides, setCurrentSlides] = useState<CurrentSlides>({
    project1: 0,
    project2: 0,
    project3: 0,
    project4: 0,
    project5: 0,
    project6: 0,
    project7: 0,
    project8: 0,
    project9: 0,
    project10: 0,
    project11: 0,
    project12: 0,
    project13: 0,
    project14: 0,
    project15: 0,
    project16: 0,
    project17: 0,
    project18: 0,
    project19: 0,
    project20: 0,
    project21: 0,
    project22: 0,
    project23: 0,
    project24: 0,
    project25: 0,
    project26: 0,
    project27: 0,
    project28: 0,
    project29: 0,
    project30: 0,
    project31: 0,
    project32: 0,
    project33: 0,
    project34: 0,
    project35: 0,
    project36: 0
  });
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  const closeFullscreen = () => {
    setSelectedImage(null);
  };

  const projectImages: ProjectImages = {
    project1: [RenovationDetachedHouseCenter1, RenovationDetachedHouseCenter2, RenovationDetachedHouseCenter3],
    project2: [StoreShoppingCenter1, StoreShoppingCenter2, StoreShoppingCenter3, StoreShoppingCenter4, StoreShoppingCenter5, StoreShoppingCenter6, StoreShoppingCenter7, StoreShoppingCenter8, StoreShoppingCenter9],
    project3: [RenovationSecondDetachedHouseCenter1, RenovationSecondDetachedHouseCenter2, RenovationSecondDetachedHouseCenter3, RenovationSecondDetachedHouseCenter4, RenovationSecondDetachedHouseCenter5],
    project4: [lop, lop2],
    project5: [ad, af, ag, ah, aj, ak, al, as1],
    project6: [m, n, b, v, c, x, z],
    project7: [f1, f2, f3],
    project8: [to, to1],
    project9: [t1, t10, t2, t3, t4, t5, t6, t7, t8, t9],
    project10: [VelvetSkins2, VelvetSkins3, VelvetSkins4, VelvetSkins5, VelvetSkins6, VelvetSkins7, VelvetSkins8, VelvetSkins9, VelvetSkins10, VelvetSkins11, VelvetSkins12, VelvetSkins13, VelvetSkins14, VelvetSkins15, VelvetSkins16],
    project11: [houseMaroneia, houseMaroneia2, houseMaroneia3, houseMaroneia4, houseMaroneia5],
    project12: [threeStorybuilding, threeStorybuilding2, threeStorybuilding3, threeStorybuilding4],
    project13: [roofdetachedhouse, roofdetachedhouse2, roofdetachedhouse3, roofdetachedhouse4, roofdetachedhouse5, roofdetachedhouse6],
    project14: [groundFloorHolidayHomes, groundFloorHolidayHomes2, groundFloorHolidayHomes3, groundFloorHolidayHomes4, groundFloorHolidayHomes5, groundFloorHolidayHomes6, groundFloorHolidayHomes7],
    project15: [
      houseAtArogiRodopi, houseAtArogiRodopi2, houseAtArogiRodopi3, 
      houseAtArogiRodopi4, houseAtArogiRodopi5, houseAtArogiRodopi6,
      houseAtArogiRodopi7, houseAtArogiRodopi8, houseAtArogiRodopi9,
      houseAtArogiRodopi10
    ],
    project16: [
      SmallRentalApartments1,
      SmallRentalApartments2,
      SmallRentalApartments3,
      SmallRentalApartments4,
      SmallRentalApartments5,
      SmallRentalApartments6
    ],
    project17: [
      MaroniaPlatanitis1,
      MaroniaPlatanitis2,
      MaroniaPlatanitis3,
      MaroniaPlatanitis4,
      MaroniaPlatanitis5
    ],
    project18: [
      structureRepairEval1,
      structureRepairEval2,
      structureRepairEval3,
      structureRepairEval4,
      structureRepairEval5,
      structureRepairEval6,
      structureRepairEval7
    ],
    project19: [
      photorealismHouse1,
      photorealismHouse2,
      photorealismHouse3,
      photorealismHouse4,
      photorealismHouse5,
      photorealismHouse6,
      photorealismHouse7
    ],
    project20: [constructionResidential],
    project21: [
      singleStoreyHouse1,
      singleStoreyHouse2,
      singleStoreyHouse3,
      singleStoreyHouse4
    ],
    project22: [penetronAdmix],
    project23: [
      constructionDetachedHouse1,
      constructionDetachedHouse2,
      constructionDetachedHouse3,
      constructionDetachedHouse4,
      constructionDetachedHouse5,
      constructionDetachedHouse6,
      constructionDetachedHouse7,
      constructionDetachedHouse8
    ],
    project24: [
      constructionHouseKomotini1,
      constructionHouseKomotini2,
      constructionHouseKomotini3,
      constructionHouseKomotini4
    ],
    project25: [
      summerResidenceComplex1,
      summerResidenceComplex2,
      summerResidenceComplex3,
      summerResidenceComplex4,
      summerResidenceComplex5,
      summerResidenceComplex6
    ],
    project26: [heightIncreaseKomotini],
    project27: [
      constructionOfDetachedHouse1,
      constructionOfDetachedHouse2,
      constructionOfDetachedHouse3
    ],
    project28: [
      constructionOfPrivateProjects1,
      constructionOfPrivateProjects2,
      constructionOfPrivateProjects3,
      constructionOfPrivateProjects4
    ],
    project29: [
      mikelIkea1,
      mikelIkea2,
      mikelIkea3,
      mikelIkea4
    ],
    project30: [holidayGroundFloorResidences],
    project31: [
      damagesCausesRestorations1,
      damagesCausesRestorations2,
      damagesCausesRestorations3,
      damagesCausesRestorations4,
      damagesCausesRestorations5,
      damagesCausesRestorations6,
      damagesCausesRestorations7
    ],
    project32: [constructionInProgress],
    project33: [
      cornerPlotUrbanHouse1,
      cornerPlotUrbanHouse2
    ],
    project34: [
      newBusinessSpace1,
      newBusinessSpace2,
      newBusinessSpace3
    ],
    project35: [constructionProgress],
    project36: [
      insideConstruction1,
      insideConstruction2
    ]
  };

  const projectTitles = {
    el: [
      "Aνάπλαση μονοκατοικίας στο κέντρο",
      "Κατάστημα σε Εμπορικό κέντρο",
      "Aνάπλαση μονοκατοικίας στο κέντρο",
      "Νέο Έργο - Μονοκατοικία στις Σάπες",
      "Μελέτη Ανέγερσης Ισόγειας Μονοκατοικίας",
      "Προκατασκευασμένες Κατοικίες στον Προφήτη Ηλία",
      "Μονοκατοικία στην Παραλία Αρωγής",
      "Διώροφη Μονοκατοικία με Σοφίτα στην Εκτενεπόλ",
      "Πολυώροφα Κτίρια Κατοικιών στην Κομοτηνή",
      "Velvet Skins Laser and Face Center Κομοτηνή",
      "Κατοικία στη Μαρώνεια",
      "Τριώροφο Κτίριο",
      "Μονοκατοικία με Στέγη",
      "Ισόγειες Παραθεριστικές Κατοικίες",
      "Κατοικία στην Αρωγή Ροδόπης",
      "Maronia Rental apartments Resort",
      "Παραλία Πλατανίτη Μαρώνειας",
      "Έρευνα Αποτίμησης Επισκευής",
      "Φωτορεαλισμός Μονοκατοικίας",
      "Ανέγερση Οικοδομής Χρήσης Κατοικίας",
      "Ανέγερση Ισόγειας Μονοκατοικίας",
      "PenetronAdmix",
      "Construction of a detached house",
      "Ανέγερση Μονοκατοικίας στην Κομοτηνή",
      "Συγκρότημα Θερινών Κατοικιών Πλατανίτης",
      "Προσθήκη καθ' ύψος στην Κομοτηνή",
      "Ανέγερση Μονοκατοικίας στην Κομοτηνή",
      "Κατασκευή Ιδιωτικών Έργων",
      "Mikel-IKEA Project",
      "Παραθεριστικές Ισόγειες Κατοικίες",
      "Έρευνα Βλαβών και Αποκαταστάσεων",
      "Construction in Progress",
      "Γωνιακό Οικόπεδο Αστικής Μονοκατοικίας",
      "Νέος Επαγγελματικός Χώρος",
      "Κατασκευή σε Εξέλιξη",
      "In Progress, Κομοτηνή",
      "Πολυώροφα Έργα Κατοικιών",
      "Διαχείριση Εργοταξίου",
      "Παλαιότερα Projects"
    ],
    en: [
      "Renovation of a detached house in the center",
      "Store in a shopping center",
      "Renovation of a detached house in the center",
      "New Project - House in Sapes",
      "Study of Ground Floor House Construction",
      "Prefabricated Houses in Prophet Elias",
      "House in Arogi Beach",
      "Two-story House with Attic in Ektenepol",
      "Multi-storey Residential Buildings in Komotini",
      "Velvet Skins Laser and Face Center Komotini",
      "House in Maronia",
      "Three-story Building",
      "House with Roof",
      "Ground Floor Holiday Homes",
      "House in Arogi Rodopi",
      "Maronia Rental apartments Resort",
      "Platanitis Beach Maronia",
      "Structure Repair Evaluation Research",
      "House Photorealism",
      "Residential Building Construction",
      "Ground Floor House Construction",
      "PenetronAdmix",
      "Construction of a detached house",
      "House Construction in Komotini",
      "Summer Residence Complex Platanitis",
      "Height Addition in Komotini",
      "House Construction in Komotini",
      "Private Projects Construction",
      "Mikel-IKEA Project",
      "Holiday Ground Floor Residences",
      "Damage and Restoration Research",
      "Construction in Progress",
      "Corner Plot Urban House",
      "New Business Space",
      "Construction in Progress",
      "In Progress, Komotini",
      "Multi-storey Residential Projects",
      "Construction Site Management",
      "Past Projects"
    ]
  };

  const projectDescriptions = {
    el: [
      "Ανακαίνιση και αναδιαμόρφωση μονοκατοικίας με σύγχρονες προδιαγραφές",
      "Σχεδιασμός και κατασκευή καταστήματος σε εμπορικό κέντρο",
      "Ανακαίνιση και αναδιαμόρφωση μονοκατοικίας με σύγχρονες προδιαγραφές",
      "Νέο έργο υπό κατασκευή. Ανέγερση μονοκατοικίας στις Σάπες Ροδόπης.",
      "Μελέτη ανέγερσης ισόγειας μονοκατοικίας με πρόβλεψη ορόφου. Φωτορεαλιστική απεικόνιση.",
      "Νέο έργο σε εξέλιξη: Ανέγερση δύο όμοιων προκατασκευασμένων κατοικιών. Ολοκλήρωση βάσεων σκυροδέματος.",
      "Αρχιτεκτονική μελέτη, Στατική μελέτη, ισόγειας μονοκατοικίας 50 τ.μ. με σοφίτα 25 τ.μ.",
      "Ανέγερση διώροφου μονοκατοικίας με Σοφίτα- αρχιτεκτονική μελέτη",
      "Past multi storey residential projects. Komotini.",
      "Αρχιτεκτονικός σχεδιασμός, Μελέτη, Πλήρης οργάνωση χρονοδιαγράμματος & Λειτουργική υλοποίηση",
      "Μελέτη και κατασκευή κατοικίας στη Μαρώνεια",
      "Κατασκευή τριώροφου κτιρίου",
      "Κατασκευή μονοκατοικίας με στέγη",
      "Κατασκευή ισόγειων παραθεριστικών κατοικιών",
      "Κατασκευή κατοικίας στην Αρωγή Ροδόπης",
      "Συγκρότημα ενοικιαζόμενων διαμερισμάτων στη Μαρώνεια",
      "Συγκρότημα έξι θερινών κατοικιών",
      "Μετρήσεις: pH, Χλωριόντων, Βαθμού διάβρωσης, Υγρασίας",
      "Φωτορεαλιστική απεικόνιση διώροφης μονοκατοικίας",
      "Κατασκευή κτιρίου κατοικιών",
      "Κατασκευαστικό στάδιο θερμοπρόσοψης-επιχρισμάτων",
      "The step-by-step process",
      "Εξέλιξη κατασκευής- επιχρίσματα, εργασίες αποπεράτωσης",
      "Εξέλιξη κατασκευής- αποπεράτωση πλακών σκυροδέματος",
      "Επένδυση στην παραλιακή ζώνη της Μαρώνειας",
      "Προετοιμασία εργασιών: Υδροβολή, Απόξεση, κλπ",
      "Εξέλιξη κατασκευής- επιχρίσματα",
      "Ανακαινίσεις, Μονώσεις ταρατσών - εξωστών - υπογείων",
      "Επαγγελματικός χώρος",
      "Τρεις όμοιες παραθεριστικές κατοικίες στον Προφήτη Ηλία",
      "Μετρήσεις υγρασίας, Υλοποιήσεις αρχιτεκτονικών μελετών",
      "Ongoing construction project",
      "Περιοχή Εκτενεπόλ - Excavation days",
      "Αρχιτεκτονικός σχεδιασμός και υλοποίηση",
      "Construction in progress",
      "Εσωτερικές εργασίες",
      "Παλαιότερα έργα στην Κομοτηνή",
      "Ολοκληρωμένες υπηρεσίες συμβούλων μηχανικών",
      "Αρχιτεκτονικές, Στατικές & Ενεργειακές Μελέτες"
    ],
    en: [
      "Renovation and remodeling of a detached house with modern specifications",
      "Design and construction of a store in a shopping center",
      "Renovation and remodeling of a detached house with modern specifications",
      "New project under construction. House construction in Sapes, Rodopi.",
      "Study for the construction of a ground floor house with provision for an additional floor. Photorealistic visualization.",
      "New project in progress: Construction of two identical prefabricated houses. Completion of concrete foundations.",
      "Architectural study, Static study, 50 sq.m. ground floor house with 25 sq.m. attic.",
      "Construction of a two-story house with attic - architectural study",
      "Past multi-storey residential projects in Komotini.",
      "Architectural design, Study, Complete timeline organization & Functional implementation",
      "Study and construction of a house in Maronia",
      "Construction of a three-story building",
      "Construction of a house with roof",
      "Construction of ground floor holiday homes",
      "Construction of a house in Arogi Rodopi",
      "Rental apartments complex in Maronia",
      "Complex of six summer residences",
      "Measurements: pH, Chlorides, Corrosion rate, Humidity",
      "Photorealistic visualization of a two-story house",
      "Construction of a residential building",
      "Construction stage of thermal facade-plastering",
      "The step-by-step process",
      "Construction progress - plastering, completion works",
      "Construction progress - completion of concrete slabs",
      "Investment in the coastal zone of Maronia",
      "Work preparation: Hydroblasting, Scraping, etc",
      "Construction progress - plastering",
      "Renovations, Waterproofing of terraces - balconies - basements",
      "Professional space",
      "Three identical holiday homes in Prophet Elias",
      "Humidity measurements, Implementation of architectural studies",
      "Ongoing construction project",
      "Ektenepol area - Excavation days",
      "Architectural design and implementation",
      "Construction in progress",
      "Interior works",
      "Past projects in Komotini",
      "Comprehensive engineering consulting services",
      "Architectural, Structural & Energy Studies"
    ]
  };

  const handlePrevSlide = (project: ProjectKey, e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlides(prev => ({
      ...prev,
      [project]: prev[project] === 0 ? projectImages[project].length - 1 : prev[project] - 1
    }));
  };

  const handleNextSlide = (project: ProjectKey, e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlides(prev => ({
      ...prev,
      [project]: prev[project] === projectImages[project].length - 1 ? 0 : prev[project] + 1
    }));
  };

  const selectedProjects = [
    {
      title: {
        el: 'Maronia Rental apartments Resort - Παραλία Μαρώνειας, Αλκυώνα, Ροδόπη',
        en: 'Maronia Rental apartments Resort - Maronia seafront, Alkyona, Rodopi (Komotini) prefecture'
      },
      description: {
        el: 'Maronia Rental apartments Resort. Παραλία Μαρώνειας, Αλκυώνα, Νομός Ροδόπης. Αρχιτεκτονική, Πολιτική Μηχανική, Ανάπτυξη Ακινήτων, Ευρωπαϊκές Πιστοποιημένες Εκτιμήσεις, Επιχειρηματικές Άδειες, ΚΟΜΟΤΗΝΗ, ΜΑΡΩΝΕΙΑ, ΦΑΝΑΡΙ. Υλοποίηση ενός από τα πιο ενδιαφέροντα projects, Alkyona Retreat Resort, Οικισμός Αλκυώνας, Παραλία Μαρώνειας, Νομού Ροδόπης.',
        en: 'Maronia Rental apartments Resort. Maronia seafront, Alkyona, Rodopi (Komotini) prefecture. Architecture, Civil Engineering, Real Estate Development, European Certified Evaluations, Business Permits, KOMOTINI, MARONIA, FANARI. Implementation of one of the most interesting projects, Alkyona Retreat Resort, Alkyona Settlement, Maronia Beach, Rodopi Prefecture.'
      },
      images: [
        SmallRentalApartments1,
        SmallRentalApartments2,
        SmallRentalApartments3,
        SmallRentalApartments4,
        SmallRentalApartments5,
        SmallRentalApartments6
      ]
    }
  ];

  // Στο component, προσθέτουμε ένα array με όλες τις υπηρεσίες και τις μεταφράσεις τους
  const engineeringServices = [
    {
      el: 'Στατικές Μελέτες & Μελέτες Εφαρμογής',
      en: 'Structural Studies & Implementation Studies'
    },
    {
      el: 'Χρονικός Προγραμματισμός Project Management',
      en: 'Project Management & Time Scheduling'
    },
    {
      el: 'Κοστολόγηση ανα στάδιο εργασιών (και ασφαλ. Εισφορών)',
      en: 'Stage-by-stage Costing (including insurance contributions)'
    },
    {
      el: 'Επιβλέψεις με χρονικό προγρ/σμό κατασκευής καταστημάτων, ανακαινίσεων κατοικιών',
      en: 'Supervision with construction timeline for stores and home renovations'
    },
    // ... συνέχεια των υπηρεσιών
  ];

  const architecturalServices = [
    {
      el: 'Υπηρεσίες Αρχιτέκτων, Σχεδιασμός, Υλοποίηση',
      en: 'Architectural Services, Design, Implementation'
    },
    {
      el: 'Ειδίκευση σε έργα ιδιωτικής κατοικίας, και τουριστικά καταλύματα',
      en: 'Specialization in private residences and tourist accommodations'
    },
    {
      el: 'Οικοδομική άδεια, Εγκρίσεις δόμησης κάθε μορφής, Ηλεκτρ. Παρακολούθηση αδείας',
      en: 'Building permit, All types of building approvals, Electronic permit monitoring'
    },
    {
      el: 'Πολεοδομική νομοθεσία και εφαρμογές ανα είδος έργου',
      en: 'Urban planning legislation and applications per project type'
    },
    {
      el: 'Έλεγχος νομιμότητας κτιρίου (και ιστορικότητα ανα στάδια και έτη αδειοδοτήσεων)',
      en: 'Building legality check (including historical stages and years of licensing)'
    },
    {
      el: 'Ταυτότητα Κτιρίου',
      en: 'Building Identity'
    },
    {
      el: 'Ρυθμίσεις Αυθαιρέτων (κατοικίες, καταστήματα, βιοτεχνίες)',
      en: 'Unauthorized building settlements (homes, stores, industries)'
    },
    {
      el: 'Αδειες Αλλαγής χρήσης, Αδειες εργασιών Μικρής κλίμακας, Αναθεωρήσεις αδειών',
      en: 'Change of use permits, Small-scale work permits, Permit revisions'
    },
    {
      el: 'Εκδοση αναλυτικού προυπολογισμού, Πινακες 1 κλπ, Πίνακες ικα',
      en: 'Detailed budget issuance, Tables 1 etc., IKA tables'
    },
    {
      el: 'Φάκελος Αδ. Λειτουργίας καταστημάτων, Γνωστοποίηση με πλήρη αρχείο',
      en: 'Store operation license file, Notification with complete archive'
    },
    {
      el: 'Αδειες λειτουργίας καταστημάτων, ΚΥΕ, Βιοτεχνιών, Φροντιστηρίων',
      en: 'Operating licenses for stores, Food Service, Industries, Tutorial Schools'
    },
    {
      el: 'Διαγράμματα Ροής, έλεγχος επάρκειας Πυροπροστασίας, Παθητική πυρ/σια',
      en: 'Flow diagrams, Fire protection adequacy check, Passive fire protection'
    },
    {
      el: 'Πιστοποιημένη Εκτιμήτρια ακινήτων υπ. Οικονομικών, REV',
      en: 'Certified Real Estate Appraiser Ministry of Finance, REV'
    },
    {
      el: 'Συμβουλευτικές υπηρεσίες σε θέματα ακινήτων, φορολόγησης ιδιοκτησίας, κληρονομιάς',
      en: 'Consulting services on real estate, property taxation, inheritance'
    },
    {
      el: 'Εσωτερική διακόσμηση, (φωτορεαλισμός)',
      en: 'Interior decoration (photorealism)'
    },
    {
      el: 'Μελέτη περιβάλλοντος χώρου',
      en: 'Environmental space study'
    },
    {
      el: 'Ενεργειακός επιθεωρητής',
      en: 'Energy Inspector'
    },
    {
      el: 'Ελεγκτής Προσβασιμότητας',
      en: 'Accessibility Inspector'
    },
    {
      el: 'Ελεγκτής Δόμησης',
      en: 'Building Inspector'
    },
    {
      el: 'Σύνταξη & Υποβολή επενδυτικών προγραμμάτων ΕΣΠΑ',
      en: 'Preparation & Submission of ESPA investment programs'
    }
  ];

  const handleSelectedProject = (projectNumber: number) => {
    if (selectedProject === projectNumber) {
      setSelectedProject(null);
      return;
    }
    setSelectedProject(projectNumber);
  };

  return (
    <div className="min-h-screen">
      {/* Project Management Section */}
      <div 
        className="relative bg-cover bg-center py-32 md:py-48"
        style={{ 
          backgroundImage: `url(${homeSectionBackground})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative max-w-7xl mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              {language === 'el' ? 'Ολοκληρωμένες υπηρεσίες συμβούλων μηχανικών' : 'Comprehensive Engineering Consulting Services'}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 italic">
              {language === 'el' 
                ? <span dangerouslySetInnerHTML={{ __html: 'Διπλ. Πολιτικός Μηχανικός (ισοτιμία Ε.Μ.Π.)&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;Αρχιτέκτων Μηχανικός Α.Π.Θ.' }} />
                : <span dangerouslySetInnerHTML={{ __html: 'Civil Engineer (NTUA eq.)&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;Architect Engineer AUTH' }} />
              }
            </p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Construction Management Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start mb-8">
                <div className="bg-blue-100 p-3 rounded-full mt-1">
                  <Building2 className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold ml-4 text-gray-800 leading-tight">
                  {language === 'el' 
                    ? 'Διαχείριση Εργοταξίου & Έργων'
                    : 'Construction Site & Project Management'}
                </h3>
              </div>
              <ul className="space-y-4">
                {[
                  {
                    el: 'Στατικές Μελέτες & Μελέτες Εφαρμογής',
                    en: 'Structural Studies & Implementation Studies'
                  },
                  {
                    el: 'Χρονικός Προγραμματισμός Project Management',
                    en: 'Project Management & Time Scheduling'
                  },
                  {
                    el: 'Κοστολόγηση ανα στάδιο εργασιών (και ασφαλ. Εισφορών)',
                    en: 'Stage-by-stage Costing (including insurance contributions)'
                  },
                  {
                    el: 'Επιβλέψεις με χρονικό προγρ/σμό κατασκευής καταστημάτων, ανακαινίσεων κατοικιών',
                    en: 'Supervision with construction timeline for stores and home renovations'
                  },
                  {
                    el: 'Εκδοση αναλυτικού προυπολογισμού, Πινακες 1 κλπ, Πίνακες ικα',
                    en: 'Detailed budget issuance, Tables 1 etc., IKA tables'
                  },
                  {
                    el: 'Στατικές ενισχύσεις, Βλητρώσεις, Αγκυρώσεις, μέτρηση υγρασίας',
                    en: 'Structural reinforcements, Doweling, Anchoring, moisture measurement'
                  },
                  {
                    el: 'Ειδίκευση σε διάβρωση σκυροδέματος',
                    en: 'Specialization in concrete corrosion'
                  },
                  {
                    el: 'NDT τεστ αποδοτικότητας φέροντος οργανισμού υπάρχοντος',
                    en: 'NDT performance testing of existing load-bearing structure'
                  },
                  {
                    el: 'Επεμβάσεις σε παλαιότερα κτίσματα, Επισκευές κτιρίων',
                    en: 'Interventions in older buildings, Building repairs'
                  },
                  {
                    el: 'Φάκελος Αδ. Λειτουργίας καταστημάτων, Γνωστοποίηση με πλήρη αρχείο',
                    en: 'Store operation license file, Notification with complete archive'
                  },
                  {
                    el: 'Αδειες λειτουργίας καταστημάτων, ΚΥΕ, Βιοτεχνιών, Φροντιστηρίων',
                    en: 'Operating licenses for stores, Food Service, Industries, Tutorial Schools'
                  },
                  {
                    el: 'Μελέτη Ηχομόνωσης',
                    en: 'Sound Insulation Study'
                  },
                  {
                    el: 'Πιστοποιημένος Τεχνικός Ασφαλείας',
                    en: 'Certified Safety Engineer'
                  },
                  {
                    el: 'Αδειες δόμησης, Εγκρίσεις εργασιών Μικρής Κλίμακας',
                    en: 'Building permits, Small-scale work approvals'
                  },
                  {
                    el: 'Ελεγχοι δόμησης (μέγιστη κατηγορία)',
                    en: 'Building inspections (maximum category)'
                  },
                  {
                    el: 'Επιθεωρήσεις Προσβασιμότητας (πιστοπ. Ελεγκτής)',
                    en: 'Accessibility Inspections (certified Inspector)'
                  },
                  {
                    el: 'Επιθεωρήσεις προσεισμικού ελέγχου (πιστοπ. Ελεγκτής)',
                    en: 'Pre-seismic control inspections (certified Inspector)'
                  },
                  {
                    el: 'Ταυτότητα Κτιρίου',
                    en: 'Building Identity'
                  },
                  {
                    el: 'Ενεργειακός Επιθεωρητής',
                    en: 'Energy Inspector'
                  },
                  {
                    el: 'Ρυθμίσεις Αυθαιρέτων',
                    en: 'Unauthorized Building Settlements'
                  }
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle2 className="h-6 w-6 text-blue-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{language === 'el' ? item.el : item.en}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Architectural Design Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start mb-8">
                <div className="bg-blue-100 p-3 rounded-full mt-1">
                  <Ruler className="h-8 w-8 text-blue-600" />
        </div>
                <h3 className="text-2xl font-bold ml-4 text-gray-800 leading-tight">
                  {language === 'el' 
                    ? 'Αρχιτεκτονικός Σχεδιασμός & Άδειες'
                    : 'Architectural Design & Permits'}
                </h3>
      </div>
              <ul className="space-y-4">
                {[
                  {
                    el: 'Υπηρεσίες Αρχιτέκτων, Σχεδιασμός, Υλοποίηση',
                    en: 'Architectural Services, Design, Implementation'
                  },
                  {
                    el: 'Ειδίκευση σε έργα ιδιωτικής κατοικίας, και τουριστικά καταλύματα',
                    en: 'Specialization in private residences and tourist accommodations'
                  },
                  {
                    el: 'Οικοδομική άδεια, Εγκρίσεις δόμησης κάθε μορφής, Ηλεκτρ. Παρακολούθηση αδείας',
                    en: 'Building permit, All types of building approvals, Electronic permit monitoring'
                  },
                  {
                    el: 'Πολεοδομική νομοθεσία και εφαρμογές ανα είδος έργου',
                    en: 'Urban planning legislation and applications per project type'
                  },
                  {
                    el: 'Έλεγχος νομιμότητας κτιρίου (και ιστορικότητα ανα στάδια και έτη αδειοδοτήσεων)',
                    en: 'Building legality check (including historical stages and years of licensing)'
                  },
                  {
                    el: 'Ταυτότητα Κτιρίου',
                    en: 'Building Identity'
                  },
                  {
                    el: 'Ρυθμίσεις Αυθαιρέτων (κατοικίες, καταστήματα, βιοτεχνίες)',
                    en: 'Unauthorized building settlements (homes, stores, industries)'
                  },
                  {
                    el: 'Αδειες Αλλαγής χρήσης, Αδειες εργασιών Μικρής κλίμακας, Αναθεωρήσεις αδειών',
                    en: 'Change of use permits, Small-scale work permits, Permit revisions'
                  },
                  {
                    el: 'Εκδοση αναλυτικού προυπολογισμού, Πινακες 1 κλπ, Πίνακες ικα',
                    en: 'Detailed budget issuance, Tables 1 etc., IKA tables'
                  },
                  {
                    el: 'Φάκελος Αδ. Λειτουργίας καταστημάτων, Γνωστοποίηση με πλήρη αρχείο',
                    en: 'Store operation license file, Notification with complete archive'
                  },
                  {
                    el: 'Αδειες λειτουργίας καταστημάτων, ΚΥΕ, Βιοτεχνιών, Φροντιστηρίων',
                    en: 'Operating licenses for stores, Food Service, Industries, Tutorial Schools'
                  },
                  {
                    el: 'Διαγράμματα Ροής, έλεγχος επάρκειας Πυροπροστασίας, Παθητική πυρ/σια',
                    en: 'Flow diagrams, Fire protection adequacy check, Passive fire protection'
                  },
                  {
                    el: 'Πιστοποιημένη Εκτιμήτρια ακινήτων υπ. Οικονομικών, REV',
                    en: 'Certified Real Estate Appraiser Ministry of Finance, REV'
                  },
                  {
                    el: 'Συμβουλευτικές υπηρεσίες σε θέματα ακινήτων, φορολόγησης ιδιοκτησίας, κληρονομιάς',
                    en: 'Consulting services on real estate, property taxation, inheritance'
                  },
                  {
                    el: 'Εσωτερική διακόσμηση, (φωτορεαλισμός)',
                    en: 'Interior decoration (photorealism)'
                  },
                  {
                    el: 'Μελέτη περιβάλλοντος χώρου',
                    en: 'Environmental space study'
                  },
                  {
                    el: 'Ενεργειακός επιθεωρητής',
                    en: 'Energy Inspector'
                  },
                  {
                    el: 'Ελεγκτής Προσβασιμότητας',
                    en: 'Accessibility Inspector'
                  },
                  {
                    el: 'Ελεγκτής Δόμησης',
                    en: 'Building Inspector'
                  },
                  {
                    el: 'Σύνταξη & Υποβολή επενδυτικών προγραμμάτων ΕΣΠΑ',
                    en: 'Preparation & Submission of ESPA investment programs'
                  }
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle2 className="h-6 w-6 text-blue-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{language === 'el' ? item.el : item.en}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* CTA Button */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              {language === 'el' ? 'Επικοινωνήστε μαζί μας' : 'Contact Us'}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Selected Projects Section */}
      <div className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 gradient-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {language === 'el' ? 'Επιλεγμένα Έργα' : 'Featured Projects'}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Δημιουργία των project cards μόνο για τα υπάρχοντα projects */}
            {Object.keys(projectImages).map((projectKey, index) => {
              const key = projectKey as ProjectKey;
              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  onClick={() => handleSelectedProject(index)}
                >
                  <div className="relative aspect-[4/3]">
                    <img 
                      src={projectImages[key][currentSlides[key] || 0]} 
                      alt={projectTitles[language][index]} 
                      className="w-full h-full object-cover"
                    />
                    {projectImages[key].length > 1 && (
                      <div className="absolute inset-0 flex items-center justify-between px-4">
                        <button 
                          className="p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                          onClick={(e) => handlePrevSlide(key, e)}
                        >
                          <ChevronLeft className="h-6 w-6" />
                        </button>
                        <button 
                          className="p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                          onClick={(e) => handleNextSlide(key, e)}
                        >
                          <ChevronRight className="h-6 w-6" />
                        </button>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">
                      {projectTitles[language][index]}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {projectDescriptions[language][index]}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 gradient-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {language === 'el' ? 'Οι Υπηρεσίες μας' : 'Our Services'}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Architectural Services */}
              <motion.div
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Building2 className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {language === 'el' ? 'Αρχιτεκτονικές Υπηρεσίες' : 'Architectural Services'}
              </h3>
              <p className="text-gray-600 mb-4">
                {language === 'el' 
                  ? 'Σχεδιασμός και υλοποίηση αρχιτεκτονικών έργων με καινοτόμες λύσεις'
                  : 'Design and implementation of architectural projects with innovative solutions'}
              </p>
              <Link
                to="/architectural-office"
                className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
              >
                {language === 'el' ? 'Μάθετε περισσότερα' : 'Learn more'}
                <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
              </motion.div>

            {/* Engineering Services */}
            <motion.div
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Ruler className="h-6 w-6 text-green-600" />
          </div>
              <h3 className="text-xl font-semibold mb-3">
                {language === 'el' ? 'Υπηρεσίες Μηχανικού' : 'Engineering Services'}
              </h3>
              <p className="text-gray-600 mb-4">
                {language === 'el'
                  ? 'Ολοκληρωμένες υπηρεσίες μηχανικού και τεχνικές μελέτες'
                  : 'Comprehensive engineering services and technical studies'}
              </p>
              <Link
                to="/engineering-services"
                className="text-green-600 hover:text-green-700 font-medium inline-flex items-center"
              >
                {language === 'el' ? 'Μάθετε περισσότερα' : 'Learn more'}
                <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </motion.div>

            {/* Real Estate Services */}
            <motion.div
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Building className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {language === 'el' ? 'Διαχείριση Ακινήτων' : 'Real Estate Management'}
              </h3>
              <p className="text-gray-600 mb-4">
                {language === 'el'
                  ? 'Επαγγελματική διαχείριση και αξιοποίηση ακινήτων'
                  : 'Professional real estate management and development'}
              </p>
              <Link
                to="/portfolio"
                className="text-purple-600 hover:text-purple-700 font-medium inline-flex items-center"
              >
                {language === 'el' ? 'Μάθετε περισσότερα' : 'Learn more'}
                <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Certifications Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
            {language === 'el' ? 'Πιστοποιήσεις' : 'Certifications'}
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Certifications Card */}
            <motion.div
              className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300 border border-gray-100"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold ml-4 text-gray-800">
                  {language === 'el' ? 'Επαγγελματικές Πιστοποιήσεις' : 'Professional Certifications'}
                </h3>
              </div>
              <ul className="space-y-4">
                {certifications[language].column1.map((cert, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start space-x-3 text-gray-700"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                    <span 
                      className="text-base leading-relaxed" 
                      dangerouslySetInnerHTML={{ __html: cert }}
                    />
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Professional Memberships Card */}
            <motion.div
              className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300 border border-gray-100"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <div className="bg-green-100 p-3 rounded-full">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-semibold ml-4 text-gray-800">
                  {language === 'el' ? 'Επαγγελματικές Συμμετοχές' : 'Professional Memberships'}
                </h3>
              </div>
              <ul className="space-y-4">
                {certifications[language].column2.map((cert, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start space-x-3 text-gray-700"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                    <span 
                      className="text-base leading-relaxed" 
                      dangerouslySetInnerHTML={{ __html: cert }}
                    />
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* CTA Button */}
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link
              to="/about-us"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              {language === 'el' ? 'Μάθετε περισσότερα για εμάς' : 'Learn more about us'}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;