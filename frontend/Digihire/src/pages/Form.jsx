import React, { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  Box,
  Button,
  Input,
  Grid,
  GridItem,
  HStack,
  Stack,
  AspectRatio,
} from "@chakra-ui/react";
import { Radio, RadioGroup } from "@/components/ui/radio";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [currentTab, setCurrentTab] = useState("personal");
  const tabOrder = [
    "personal",
    "family",
    "education",
    "employment",
    "training/course",
    "organizations",
    "references",
    "location",
  ];
  const tabContainerRef = useRef(null);
  const onSubmit = async (data) => {
    // submit data
    const fname = data.First_name;
    const lastname = data.Last_name;
    const mname = data.Middle_name;
    const fullname = fname + " " + mname + " " + lastname;
    const emailadd = data.Email;
    const fb = data.Fb;
    const presadd = data.PresAdd;
    const permaadd = data.PermaAdd;
    const mobilenum = data.Mobile;
    const landline = data.Firstland;
    const sex = data.Sex;
    const birthdata = data.Birthdate;
    const civilstats = data.Civil;
    const height = data.Height;
    const weight = data.Weight;
    const tin = data.Tin;
    const philhealth = data.Philhealth;
    const sss = data.SSS;
    const pagibig = data.Pag_ibig;
    const religion = data.Religion;
    const nationality = data.Nationality;
    const promotion = data.Media;
    const refer = data.Workrelname;
    const reltoref = data.Refrel;
    const langtospeak = data.Language;
    const datetobegin = data.Availability;
    const expectsal = data.Salary;
    const faname = data.Father_name;
    const moname = data.Mother_name;
    const mocont = data.Mother_contact;
    const facont = data.Father_contact;
    const famadd = data.Parents_address;
    const sib1 = data.Sibling1;
    const sib2 = data.Sibling2;
    const sib3 = data.Sibling3;
    const sib4 = data.Sibling4;
    const sib5 = data.Sibling5;

    const sibage1 = data.Sibling1Age;
    const sibage2 = data.Sibling2Age;
    const sibage3 = data.Sibling3Age;
    const sibage4 = data.Sibling4Age;
    const sibage5 = data.Sibling5Age;

    const siboccu1 = data.Sibling1Occu;
    const siboccu2 = data.Sibling2Occu;
    const siboccu3 = data.Sibling3Occu;
    const siboccu4 = data.Sibling4Occu;
    const siboccu5 = data.Sibling5Occu;

    const sibcont1 = data.Sibling1Cont;
    const sibcont2 = data.Sibling2Cont;
    const sibcont3 = data.Sibling3Cont;
    const sibcont4 = data.Sibling4Cont;
    const sibcont5 = data.Sibling5Cont;
    const spouse = data.Spousename;
    const spouseoccu = data.SpouseOccu;
    const spouseemp = data.SpouseEmployer;
    const spousecont = data.SpouseCont;
    const spouseadd = data.SpouseAddress;
    const childnum = data.Childnum;
    const chname1 = data.Childname1;
    const chname2 = data.Childname2;
    const chname3 = data.Childname3;
    const chname4 = data.Childname4;
    const chname5 = data.Childname5;
    const chname1Age = data.ChildAge1;
    const chname2Age = data.ChildAge2;
    const chname3Age = data.ChildAge3;
    const chname4Age = data.ChildAge4;
    const chname5Age = data.ChildAge5;
    const chname1bdate = data.Child1birthdate;
    const chname2bdate = data.Child2birthdate;
    const chname3bdate = data.Child3birthdate;
    const chname4bdate = data.Child4birthdate;
    const chname5bdate = data.Child5birthdate;
    const emername = data.Emergency_name;
    const emerrel = data.Emergency_Rel;
    const emeremail = data.Emergency_Email;
    const emeroccu = data.Emergency_Occu;
    const emercel = data.Emergency_Cell;
    const emerlandline = data.Emergency_Landline;
    const psname = data.Postschoolname;
    const psloc = data.Postschoolloc;
    const psdeg = data.PostschoolDeg;
    const psstart = data.Postschoolstart;
    const psend = data.Postschoolend;
    const psdip = data.Postschooldiploma;
    const csname = data.Colschoolname;
    const csloc = data.Colschoolloc;
    const csdeg = data.Colschooldeg;
    const csstart = data.Colschoolstart;
    const csend = data.Colschoolend;
    const csdip = data.ColschoolDiploma;
    const vsname = data.Vocschoolname;
    const vsloc = data.Vocschoolloc;
    const vsdeg = data.VocschoolDeg;
    const vsstart = data.Vocschoolstart;
    const vsend = data.Vocschoolend;
    const vsdip = data.Vocschooldiploma;
    const ssname = data.Seconschoolname;
    const ssloc = data.Seconschoolloc;
    const ssdeg = data.Seconschooldeg;
    const ssstart = data.Seconschoolstart;
    const ssend = data.Seconschoolend;
    const ssdip = data.Seconschooldip;
    const esname = data.Elemschoolname;
    const esloc = data.Elemschoolloc;
    const esdeg = data.Elemschooldeg;
    const esstart = data.Elemschoolstart;
    const esend = data.Elemschoolend;
    const esdip = data.Elemschooldip;
    const ncee = data.nceerating;
    const nsats = data.nsat;
    const govl = data.govtlicense;
    const rting = data.rating;
    const dlicense = data.license;
    const transpo = data.transpo;
    const emploname1 = data.expemployername1;
    const emploname2 = data.expemployername2;
    const emploname3 = data.expemployername3;
    const emploadd1 = data.expemployeraddress1;
    const emploadd2 = data.expemployeraddress2;
    const emploadd3 = data.expemployeraddress3;
    const emplodeg1 = data.expemployerdeg1;
    const emplodeg2 = data.expemployerdeg2;
    const emplodeg3 = data.expemployerdeg3;
    const emplodip1 = data.expemployerdip1;
    const emplodip2 = data.expemployerdip2;
    const emplodip3 = data.expemployerdip3;
    const emplopos1 = data.expemployerpos1;
    const emplopos2 = data.expemployerpos2;
    const emplopos3 = data.expemployerpos3;
    const emplopay1 = data.expemployerpayrate1;
    const emplopay2 = data.expemployerpayrate2;
    const emplopay3 = data.expemployerpayrate3;
    const emplostart1 = data.expemployerstart1;
    const emplostart2 = data.expemployerstart2;
    const emplostart3 = data.expemployerstart3;
    const emploend1 = data.expemployerend1;
    const emploend2 = data.expemployerend2;
    const emploend3 = data.expemployerend3;
    const emplowork1 = data.expemployerwork1;
    const emplowork2 = data.expemployerwork2;
    const emplowork3 = data.expemployerwork3;
    const emplosup1 = data.expemployersupContact1;
    const emplosup2 = data.expemployersupContact2;
    const emplosup3 = data.expemployersupContact3;
    const emplojobfunc1 = data.expemployerjobfunc1;
    const emplojobfunc2 = data.expemployerjobfunc2;
    const emplojobfunc3 = data.expemployerjobfunc3;
    const emploleave1 = data.whyleave1;
    const emploleave2 = data.whyleave2;
    const emploleave3 = data.whyleave3;
    const semi1 = data.sem1;
    const semi2 = data.sem2;
    const semi3 = data.sem3;
    const semi4 = data.sem4;
    const semi5 = data.sem5;
    const semip1 = data.semplace1;
    const semip2 = data.semplace2;
    const semip3 = data.semplace3;
    const semip4 = data.semplace4;
    const semip5 = data.semplace5;
    const semif1 = data.semfrom1;
    const semif2 = data.semfrom2;
    const semif3 = data.semfrom3;
    const semif4 = data.semfrom4;
    const semif5 = data.semfrom5;
    const semit1 = data.semto1;
    const semit2 = data.semto2;
    const semit3 = data.semto3;
    const semit4 = data.semto4;
    const semit5 = data.semto5;

    const orgs1 = data.org1;
    const orgs2 = data.org2;
    const orgs3 = data.org3;
    const orgs4 = data.org4;
    const orgs5 = data.org5;
    const orgsp1 = data.orgplace1;
    const orgsp2 = data.orgplace2;
    const orgsp3 = data.orgplace3;
    const orgsp4 = data.orgplace4;
    const orgsp5 = data.orgplace5;
    const orgsf1 = data.orgfrom1;
    const orgsf2 = data.orgfrom2;
    const orgsf3 = data.orgfrom3;
    const orgsf4 = data.orgfrom4;
    const orgsf5 = data.orgfrom5;
    const orgst1 = data.orgto1;
    const orgst2 = data.orgto2;
    const orgst3 = data.orgto3;
    const orgst4 = data.orgto4;
    const orgst5 = data.orgto5;
    const refename1 = data.refername1;
    const refename2 = data.refername2;
    const refename3 = data.refername3;
    const refeadd1 = data.referadd1;
    const refeadd2 = data.referadd2;
    const refeadd3 = data.referadd3;
    const refecell1 = data.refercell1;
    const refecell2 = data.refercell2;
    const refecell3 = data.refercell3;
    const refelandl1 = data.referland1;
    const refelandl2 = data.referland2;
    const refelandl3 = data.referland3;
    const referel1 = data.referrel1;
    const referel2 = data.referrel2;
    const referel3 = data.referrel3;
    const refeoccu1 = data.referoccu1;
    const refeoccu2 = data.referoccu2;
    const refeoccu3 = data.referoccu3;

    const relref1 = data.Referencename1;
    const relref2 = data.Referencename2;
    const relref3 = data.Referencename3;
    const relrefoccu1 = data.Referenceoccu1;
    const relrefoccu2 = data.Referenceocc2;
    const relrefoccu3 = data.Referenceocc3;

    const relrefadd1 = data.Referenceadd1;
    const relrefadd2 = data.Referenceadd2;
    const relrefadd3 = data.Referenceadd3;
    const datatosend = {
      fullname: fullname,
      emailAdd: emailadd,
      fb: fb,
      presentAddress: presadd,
      permaAddress: permaadd,
      mobileNum: mobilenum,
      landline: landline,
      sex: sex,
      birthdate: birthdata,
      civilStatus: civilstats,
      height: height,
      weight: weight,

      tin: tin,
      philhealth: philhealth,
      sss: sss,
      pagibig: pagibig,
      religion: religion,
      nationality: nationality,
      promotions: promotion,
      referral: refer,
      relationshipToReferral: reltoref,
      Language: langtospeak,
      Datebegin: datetobegin,
      salaryExpect: expectsal,
      fathersName: faname,
      mothersName: moname,
      motherContact: mocont,
      fatherContact: facont,
      famAddress: famadd,
      siblings1: sib1,
      siblings2: sib2,
      siblings3: sib3,
      siblings4: sib4,
      siblings5: sib5,
      siblings1Age: sibage1,
      siblings2Age: sibage2,
      siblings3Age: sibage3,
      siblings4Age: sibage4,
      siblings5Age: sibage5,
      siblings1Occupation: siboccu1,
      siblings2Occupation: siboccu2,
      siblings3Occupation: siboccu3,
      siblings4Occupation: siboccu4,
      siblings5Occupation: siboccu5,
      siblings1Contact: sibcont1,
      siblings2Contact: sibcont2,
      siblings3Contact: sibcont3,
      siblings4Contact: sibcont4,
      siblings5Contact: sibcont5,
      spousename: spouse,
      spouseoccupation: spouseoccu,
      spousecontact: spousecont,
      spousenameemployer: spouseemp,
      spouseaddress: spouseadd,
      childnum: childnum,
      childname1: chname1,
      childname2: chname2,
      childname3: chname3,
      childname4: chname4,
      childname5: chname5,
      childbirthdate1: chname1bdate,
      childbirthdate2: chname2bdate,
      childbirthdate3: chname3bdate,
      childbirthdate4: chname4bdate,
      childbirthdate5: chname5bdate,
      childage1: chname1Age,
      childage2: chname2Age,
      childage3: chname3Age,
      childage4: chname4Age,
      childage5: chname5Age,

      emergencyContactName: emername,
      emergencyContactRelationship: emerrel,
      emergencyContactOccupation: emeroccu,
      emergencyContactemail: emeremail,
      emergencyContactcp: emercel,
      emergencyContactlandline: emerlandline,
      postSchoolName: psname,
      postSchoollocation: psloc,
      postMajor: psdeg,
      postGradDateStarted: psstart,
      postGradDateEnded: psend,
      postGradDiploma: psdip,
      collegeSchoolName: csname,
      collegeSchoollocation: csloc,
      collegeMajor: csdeg,
      collegeGradDateStarted: csstart,
      collegeGradDateEnded: csend,
      collegeGradDiploma: csdip,
      vocationalSchoolName: vsname,
      vocationalSchoollocation: vsloc,
      vocationalMajor: vsdeg,
      vocationalGradDateStarted: vsstart,
      vocationalGradDateEnded: vsend,
      vocationalGradDiploma: vsdip,
      secondarySchoolName: ssname,
      secondarySchoollocation: ssloc,
      secondaryMajor: ssdeg,
      secondaryGradDateStarted: ssstart,
      secondaryGradDateEnded: ssend,
      secondaryGradDiploma: ssdip,
      elemSchoolName: esname,
      elemSchoollocation: esloc,
      elemMajor: esdeg,
      elemGradDateStarted: esstart,
      elemGradDateEnded: esend,
      elemGradDiploma: esdip,
      driverLicense: dlicense,
      ncee: ncee,
      nsat: nsats,
      licensure: govl,
      rating: rting,
      transpo: transpo,

      employername1: emploname1,
      workddress1: emploadd1,
      workdegree1: emplodeg1,
      workdiploma1: emplodip1,
      workposition1: emplopos1,
      workpay1: emplopay1,
      workdatestart1: emplostart1,
      workdateend1: emploend1,
      workphone1: emplowork1,
      worksupervisor1: emplosup1,
      workrole1: emplojobfunc1,
      workleavereason1: emploleave1,

      employername2: emploname2,
      workddress2: emploadd2,
      workdegree2: emplodeg2,
      workdiploma2: emplodip2,
      workposition2: emplopos2,
      workpay2: emplopay2,
      workdatestart2: emplostart2,
      workdateend2: emploend2,
      workphone2: emplowork2,
      worksupervisor2: emplosup2,
      workrole2: emplojobfunc2,
      workleavereason2: emploleave2,

      employername3: emploname3,
      workddress3: emploadd3,
      workdegree3: emplodeg3,
      workdiploma3: emplodip3,
      workposition3: emplopos3,
      workpay3: emplopay3,
      workdatestart3: emplostart3,
      workdateend3: emploend3,
      workphone3: emplowork3,
      worksupervisor3: emplosup3,
      workrole3: emplojobfunc3,
      workleavereason3: emploleave3,

      seminar1: semi1,
      seminar2: semi2,
      seminar3: semi3,
      seminar4: semi4,
      seminar5: semi5,

      semplace1: semip1,
      semplace2: semip2,
      semplace3: semip3,
      semplace4: semip4,
      semplace5: semip5,

      semfrom1: semif1,
      semfrom2: semif2,
      semfrom3: semif3,
      semfrom4: semif4,
      semfrom5: semif5,

      semto1: semit1,
      semto2: semit2,
      semto3: semit3,
      semto4: semit4,
      semto5: semit5,

      organization1: orgs1,
      organization2: orgs2,
      organization3: orgs3,
      organization4: orgs4,
      organization5: orgs5,

      orgplace1: orgsp1,
      orgplace2: orgsp2,
      orgplace3: orgsp3,
      orgplace4: orgsp4,
      orgplace5: orgsp5,

      orgfrom1: orgsf1,
      orgfrom2: orgsf2,
      orgfrom3: orgsf3,
      orgfrom4: orgsf4,
      orgfrom5: orgsf5,

      orgto1: orgst1,
      orgto2: orgst2,
      orgto3: orgst3,
      orgto4: orgst4,
      orgto5: orgst5,

      reference1: refename1,
      reference1Address: refeadd1,
      reference1Cell: refecell1,
      reference1Landline: refelandl1,
      reference1Relationship: referel1,
      reference1Occupation: refeoccu1,
      reference2: refename2,
      reference2Address: refeadd2,
      reference2Cell: refecell2,
      reference2Landline: refelandl2,
      reference2Relationship: referel2,
      reference2Occupation: refeoccu2,
      reference3: refename3,
      reference3Address: refeadd3,
      reference3Cell: refecell3,
      reference3Landline: refelandl3,
      reference3Relationship: referel3,
      reference3Occupation: refeoccu3,
      referencerelativename1: relref1,
      referencerelativename2: relref2,
      referencerelativename3: relref3,

      referenceaddress1: relrefadd1,
      referenceaddress2: relrefadd2,
      referenceaddress3: relrefadd3,

      referenceoccupation1: relrefoccu1,
      referenceoccupation2: relrefoccu2,
      referenceoccupation3: relrefoccu3,
    };
    const response = await fetch("https://192.168.254.112:8000/apply_now/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datatosend),
    });
    console.log(response);

    console.log("Form submitted successfully:", datatosend);
  };
  const handleNext = async () => {
    try {
      await handleSubmit((data) => {
        const currentIndex = tabOrder.indexOf(currentTab);
        if (currentIndex < tabOrder.length - 1) {
          setCurrentTab(tabOrder[currentIndex + 1]);
        } else {
          console.log("End of tabs");
          onSubmit(data); // Final submission logic
        }
      })(); // Trigger form validation
      // Move to the next tab if no validation errors
    } catch (error) {
      // Validation errors prevent navigation
      console.log("Validation failed, cannot proceed to the next tab.");
    }
  };

  const handleBack = () => {
    const currentIndex = tabOrder.indexOf(currentTab);
    if (currentIndex > 0) {
      setCurrentTab(tabOrder[currentIndex - 1]);
    }
  };
  useEffect(() => {
    const activeTab = document.getElementById(currentTab);
    if (activeTab && tabContainerRef.current) {
      activeTab.scrollIntoView({ behavior: "smooth", inline: "center" });
    }
  }, [currentTab]);

  return (
    <Grid
      templateColumns={{ base: "1fr", md: "repeat(6, 1fr)" }}
      gap={6}
      minHeight="100vh"
      bg="gray.50"
      p={6}
    >
      {/* Form Content */}
      <GridItem colSpan={{ base: 1, md: 4 }} colStart={{ base: 1, md: 2 }}>
        <Box
          maxWidth="100%"
          width="100%"
          p={6}
          bg="gray.50"
          boxShadow="md"
          borderRadius="lg"
        >
          {/* Tabs */}
          <Box
            ref={tabContainerRef}
            display="flex"
            gap={6}
            mb={6}
            alignItems="center"
            style={{
              whiteSpace: "nowrap", // Prevent wrapping of buttons>
            }}
          >
            <Button
              key={"personal"}
              id={"personal"}
              bg="transparent"
              color={currentTab === "personal" ? "#0B1E33" : "#0B1E33.500"}
              _hover={{ bg: "transparent", color: "#0B1E33" }}
              _focus={{ outline: "none" }}
              borderBottom={
                currentTab === "personal" ? "2px solid #013c58" : "none"
              }
              fontWeight={currentTab === "personal" ? "bold" : "normal"}
              p={currentTab === "personal" ? 1 : 2} // Increase padding for active tab
              transition="all 0.3s ease-in-out"
              isDisabled={true}
            >
              <img src={"/person.png"} className="w-6 h-6" />
              Personal
            </Button>
            <Button
              key={"family"}
              id={"family"}
              bg="transparent"
              color={currentTab === "family" ? "#0B1E33" : "#0B1E33.500"}
              _hover={{ bg: "transparent", color: "#0B1E33" }}
              _focus={{ outline: "none" }}
              borderBottom={
                currentTab === "family" ? "2px solid #013c58" : "none"
              }
              fontWeight={currentTab === "family" ? "bold" : "normal"}
              p={currentTab === "family" ? 1 : 2} // Increase padding for active tab
              transition="all 0.3s ease-in-out"
              isDisabled={true}
            >
              <img src={"/family.png"} className="w-5 h-5" />
              Family
            </Button>
            <Button
              key={"education"}
              id={"education"}
              bg="transparent"
              color={currentTab === "education" ? "#0B1E33" : "#0B1E33.500"}
              _hover={{ bg: "transparent", color: "#0B1E33" }}
              _focus={{ outline: "none" }}
              borderBottom={
                currentTab === "education" ? "2px solid #013c58" : "none"
              }
              fontWeight={currentTab === "education" ? "bold" : "normal"}
              p={currentTab === "education" ? 1 : 2} // Increase padding for active tab
              transition="all 0.3s ease-in-out"
              isDisabled={true}
            >
              <img src={"/education.png"} className="w-6 h-6" />
              Education
            </Button>
            <Button
              key={"employment"}
              id={"employment"}
              bg="transparent"
              color={currentTab === "employment" ? "#0B1E33" : "#0B1E33.500"}
              _hover={{ bg: "transparent", color: "#0B1E33" }}
              _focus={{ outline: "none" }}
              borderBottom={
                currentTab === "employment" ? "2px solid #013c58" : "none"
              }
              fontWeight={currentTab === "employment" ? "bold" : "normal"}
              p={currentTab === "employment" ? 1 : 2} // Increase padding for active tab
              transition="all 0.3s ease-in-out"
              isDisabled={true}
            >
              <img src={"/workexp.png"} className="w-6 h-6" />
              Employment
            </Button>
            <Button
              key={"training/course"}
              id={"training/course"}
              bg="transparent"
              color={
                currentTab === "training/course" ? "#0B1E33" : "#0B1E33.500"
              }
              _hover={{ bg: "transparent", color: "#0B1E33" }}
              _focus={{ outline: "none" }}
              borderBottom={
                currentTab === "training/course" ? "2px solid #013c58" : "none"
              }
              fontWeight={currentTab === "training/course" ? "bold" : "normal"}
              p={currentTab === "training/course" ? 1 : 2} // Increase padding for active tab
              transition="all 0.3s ease-in-out"
              isDisabled={true}
            >
              <img src={"/seminar.png"} className="w-6 h-6" />
              Training & Seminars
            </Button>
            <Button
              key={"organizations"}
              id={"organizations"}
              bg="transparent"
              color={currentTab === "organizations" ? "#0B1E33" : "#0B1E33.500"}
              _hover={{ bg: "transparent", color: "#0B1E33" }}
              _focus={{ outline: "none" }}
              borderBottom={
                currentTab === "organizations" ? "2px solid #013c58" : "none"
              }
              fontWeight={currentTab === "organizations" ? "bold" : "normal"}
              p={currentTab === "organizations" ? 1 : 2} // Increase padding for active tab
              transition="all 0.3s ease-in-out"
              isDisabled={true}
            >
              <img src={"/organization.png"} className="w-6 h-6" />
              Organizations
            </Button>
            <Button
              key={"references"}
              id={"references"}
              bg="transparent"
              color={currentTab === "references" ? "#0B1E33" : "#0B1E33.500"}
              _hover={{ bg: "transparent", color: "#0B1E33" }}
              _focus={{ outline: "none" }}
              borderBottom={
                currentTab === "references" ? "2px solid #013c58" : "none"
              }
              fontWeight={currentTab === "references" ? "bold" : "normal"}
              p={currentTab === "references" ? 1 : 2} // Increase padding for active tab
              transition="all 0.3s ease-in-out"
              isDisabled={true}
            >
              <img src={"/referral.png"} className="w-6 h-6" />
              References
            </Button>
            <Button
              key={"location"}
              id={"location"}
              bg="transparent"
              color={currentTab === "location" ? "#0B1E33" : "#0B1E33.500"}
              _hover={{ bg: "transparent", color: "#0B1E33" }}
              _focus={{ outline: "none" }}
              borderBottom={
                currentTab === "location" ? "2px solid #013c58" : "none"
              }
              fontWeight={currentTab === "location" ? "bold" : "normal"}
              p={currentTab === "location" ? 1 : 2} // Increase padding for active tab
              transition="all 0.3s ease-in-out"
              isDisabled={true}
            >
              <img src={"/location.png"} className="w-6 h-6" />
              Location
            </Button>
          </Box>

          {/* Tab Content */}
          {/* Personal information */}
          {currentTab === "personal" && (
            <Box
              as="fieldset"
              borderWidth="1px"
              borderRadius="md"
              p={5}
              borderColor="gray.200"
            >
              <legend className="font-medium text-lg mb-4">
                Personal Details
              </legend>
              <Grid templateColumns="repeat(4, 1fr)" gap={4}>
                <Box>
                  <label htmlFor="last-name">Last Name</label>
                  <Input
                    {...register("Last_name", {
                      required: "Last name is required",
                    })}
                    bg="white"
                    id="last-name"
                    placeholder="Type here"
                    _focus={{
                      borderColor: "gray.900",
                      outline: "2px solid blue.900",
                      outlineOffset: "1px",
                    }}
                    border="2px solid gray"
                    p={2}
                  />
                  {errors.Last_name && (
                    <p className="text-sm text-red-300">
                      {errors.Last_name.message}
                    </p>
                  )}
                </Box>
                <Box>
                  <label bg="grey.50" htmlFor="first-name">
                    First Name
                  </label>
                  <Input
                    {...register("First_name", {
                      required: "First name is required",
                    })}
                    bg="white"
                    id="first-name"
                    placeholder="Type here"
                    _focus={{
                      borderColor: "gray.900",
                      outline: "2px solid blue.900",
                      outlineOffset: "1px",
                    }}
                    border="2px solid gray"
                    p={2}
                  />
                  {errors.First_name && (
                    <p className="text-sm text-red-300">
                      {errors.First_name.message}
                    </p>
                  )}
                </Box>
                <Box>
                  <label htmlFor="middle-name">Middle Name</label>
                  <Input
                    {...register("Middle_name", {
                      required: "Middle name is required",
                    })}
                    bg="white"
                    id="middle-name"
                    placeholder="Type here"
                    _focus={{
                      borderColor: "gray.900",
                      outline: "2px solid blue.900",
                      outlineOffset: "1px",
                    }}
                    border="2px solid gray"
                    p={2}
                  />
                  {errors.Middle_name && (
                    <p className="text-sm text-red-300">
                      {errors.Middle_name.message}
                    </p>
                  )}
                </Box>
                <Box>
                  <label htmlFor="name-ext">Name Extension</label>
                  <Input
                    bg="white"
                    id="name-ext"
                    placeholder="Type here"
                    _focus={{
                      borderColor: "gray.900",
                      outline: "2px solid blue.900",
                      outlineOffset: "1px",
                    }}
                    border="2px solid gray"
                    p={2}
                  />
                </Box>
                <Box gridColumn={{ base: "span 2", md: "span 2" }}>
                  <label htmlFor="email">Email Address</label>
                  <Input
                    {...register("Email", {
                      required: "Email is required",
                    })}
                    bg="white"
                    id="email"
                    type="email"
                    placeholder="Type here"
                    _focus={{
                      borderColor: "gray.900",
                      outline: "2px solid blue.900",
                      outlineOffset: "1px",
                    }}
                    border="2px solid gray"
                    p={2}
                  />
                  {errors.Email && (
                    <p className="text-sm text-red-300">
                      {errors.Email.message}
                    </p>
                  )}
                </Box>
                <Box gridColumn={{ base: "span 2", md: "span 2" }}>
                  <label htmlFor="facebook-account">Facebook Account</label>
                  <Input
                    {...register("Fb", {
                      required: "Facebook is required",
                    })}
                    bg="white"
                    id="facebook-account"
                    placeholder="Type here"
                    _focus={{
                      borderColor: "gray.900",
                      outline: "2px solid blue.900",
                      outlineOffset: "1px",
                    }}
                    border="2px solid gray"
                    p={2}
                  />
                  {errors.Fb && (
                    <p className="text-sm text-red-300">{errors.Fb.message}</p>
                  )}
                </Box>
                <Box gridColumn={{ base: "span 3", md: "span 4" }}>
                  <label htmlFor="present-address">Present Address</label>
                  <Input
                    {...register("PresAdd", {
                      required: "Present address is required",
                    })}
                    bg="white"
                    id="present-address"
                    placeholder="House Number, Street, Barangay, City, Province, ZIP code"
                    _focus={{
                      borderColor: "gray.900",
                      outline: "2px solid blue.900",
                      outlineOffset: "1px",
                    }}
                    border="2px solid gray"
                    p={2}
                  />
                  {errors.PresAdd && (
                    <p className="text-sm text-red-300">
                      {errors.PresAdd.message}
                    </p>
                  )}
                </Box>
                <Box gridColumn={{ base: "span 3", md: "span 4" }}>
                  <label htmlFor="permanent-address">Permanent Address</label>
                  <Input
                    {...register("PermaAdd", {
                      required: "Permanent address is required",
                    })}
                    bg="white"
                    id="permanent-address"
                    placeholder="House Number, Street, Barangay, City, Province, ZIP code"
                    _focus={{
                      borderColor: "gray.900",
                      outline: "2px solid blue.900",
                      outlineOffset: "1px",
                    }}
                    border="2px solid gray"
                    p={2}
                  />
                  {errors.PermaAdd && (
                    <p className="text-sm text-red-300">
                      {errors.PermaAdd.message}
                    </p>
                  )}
                </Box>
                <Box>
                  <label htmlFor="sex">Sex</label>
                  <Input
                    {...register("Sex", {
                      required: "Sex is required",
                    })}
                    bg="white"
                    id="sex"
                    placeholder="Type here"
                    _focus={{
                      borderColor: "gray.900",
                      outline: "2px solid blue.900",
                      outlineOffset: "1px",
                    }}
                    border="2px solid gray"
                    p={2}
                  />
                  {errors.Sex && (
                    <p className="text-sm text-red-300">{errors.Sex.message}</p>
                  )}
                </Box>
                <Box>
                  <label htmlFor="civilstatus">Civil Status</label>
                  <Input
                    {...register("Civil", {
                      required: "Civil status is required",
                    })}
                    bg="white"
                    id="civilstatus"
                    placeholder="Type here"
                    _focus={{
                      borderColor: "gray.900",
                      outline: "2px solid blue.900",
                      outlineOffset: "1px",
                    }}
                    border="2px solid gray"
                    p={2}
                  />
                  {errors.Civil && (
                    <p className="text-sm text-red-300">
                      {errors.Civil.message}
                    </p>
                  )}
                </Box>
                <Box>
                  <label htmlFor="height">Height</label>
                  <Input
                    {...register("Height", {
                      required: "Height is required",
                    })}
                    bg="white"
                    id="height"
                    placeholder="cm"
                    _focus={{
                      borderColor: "gray.900",
                      outline: "2px solid blue.900",
                      outlineOffset: "1px",
                    }}
                    border="2px solid gray"
                    p={2}
                  />
                  {errors.Height && (
                    <p className="text-sm text-red-300">
                      {errors.Height.message}
                    </p>
                  )}
                </Box>
                <Box>
                  <label htmlFor="weight">Weight</label>
                  <Input
                    {...register("Weight", {
                      required: "Weight is required",
                    })}
                    bg="white"
                    id="weight"
                    placeholder="Kg"
                    _focus={{
                      borderColor: "gray.900",
                      outline: "2px solid blue.900",
                      outlineOffset: "1px",
                    }}
                    border="2px solid gray"
                    p={2}
                  />
                  {errors.Weight && (
                    <p className="text-sm text-red-300">
                      {errors.Weight.message}
                    </p>
                  )}
                </Box>
                <Box>
                  <label htmlFor="mobile-number">Mobile Number</label>
                  <Input
                    {...register("Mobile", {
                      required: "Mobile number is required",
                    })}
                    bg="white"
                    id="mobile-number"
                    placeholder="Type here"
                    _focus={{
                      borderColor: "gray.900",
                      outline: "2px solid blue.900",
                      outlineOffset: "1px",
                    }}
                    border="2px solid gray"
                    p={2}
                  />
                  {errors.Mobile && (
                    <p className="text-sm text-red-300">
                      {errors.Mobile.message}
                    </p>
                  )}
                </Box>
                <Box>
                  <label htmlFor="landline">Landline</label>
                  <Input
                    {...register("Firstland")}
                    bg="white"
                    id="landline"
                    placeholder="Type here"
                    _focus={{
                      borderColor: "gray.900",
                      outline: "2px solid blue.900",
                      outlineOffset: "1px",
                    }}
                    border="2px solid gray"
                    p={2}
                  />
                </Box>
                <Box gridColumn={{ base: "span 2", md: "span 2" }}>
                  <label htmlFor="birth-date">Date of Birth</label>
                  <Input
                    {...register("Birthdate", {
                      required: "Birthdate is required",
                    })}
                    bg="white"
                    id="birth-date"
                    placeholder="MM/DD/YYYY"
                    _focus={{
                      borderColor: "gray.900",
                      outline: "2px solid blue.900",
                      outlineOffset: "1px",
                    }}
                    border="2px solid gray"
                    p={2}
                  />
                  {errors.Birthdate && (
                    <p className="text-sm text-red-300">
                      {errors.Birthdate.message}
                    </p>
                  )}
                </Box>
                <Box>
                  <label htmlFor="tin">Tin #</label>
                  <Input
                    {...register("Tin", {
                      required: "Tin number is required",
                    })}
                    bg="white"
                    id="tin"
                    placeholder="Type here"
                    _focus={{
                      borderColor: "gray.900",
                      outline: "2px solid blue.900",
                      outlineOffset: "1px",
                    }}
                    border="2px solid gray"
                    p={2}
                  />
                  {errors.Tin && (
                    <p className="text-sm text-red-300">{errors.Tin.message}</p>
                  )}
                </Box>
                <Box>
                  <label htmlFor="sss">SSS #</label>
                  <Input
                    {...register("SSS", {
                      required: "SSS number is required",
                    })}
                    bg="white"
                    id="sss"
                    placeholder="Type here"
                    _focus={{
                      borderColor: "gray.900",
                      outline: "2px solid blue.900",
                      outlineOffset: "1px",
                    }}
                    border="2px solid gray"
                    p={2}
                  />
                  {errors.SSS && (
                    <p className="text-sm text-red-300">{errors.SSS.message}</p>
                  )}
                </Box>
                <Box>
                  <label htmlFor="pag-ibig">Pag-ibig #</label>
                  <Input
                    {...register("Pag_ibig", {
                      required: "Pag-ibig number is required",
                    })}
                    bg="white"
                    id="pag-ibig"
                    placeholder="Type here"
                    _focus={{
                      borderColor: "gray.900",
                      outline: "2px solid blue.900",
                      outlineOffset: "1px",
                    }}
                    border="2px solid gray"
                    p={2}
                  />
                  {errors.Pag_ibig && (
                    <p className="text-sm text-red-300">
                      {errors.Pag_ibig.message}
                    </p>
                  )}
                </Box>
                <Box>
                  <label htmlFor="philhealth">Philhealth #</label>
                  <Input
                    {...register("Philhealth", {
                      required: "Philhealth number is required",
                    })}
                    bg="white"
                    id="philhealth"
                    placeholder="Type here"
                    _focus={{
                      borderColor: "gray.900",
                      outline: "2px solid blue.900",
                      outlineOffset: "1px",
                    }}
                    border="2px solid gray"
                    p={2}
                  />
                  {errors.Philhealth && (
                    <p className="text-sm text-red-300">
                      {errors.Philhealth.message}
                    </p>
                  )}
                </Box>
                <Box>
                  <label htmlFor="nationality">Nationality</label>
                  <Input
                    {...register("Nationality", {
                      required: "Nationality is required",
                    })}
                    bg="white"
                    id="nationality"
                    placeholder="Type here"
                    _focus={{
                      borderColor: "gray.900",
                      outline: "2px solid blue.900",
                      outlineOffset: "1px",
                    }}
                    border="2px solid gray"
                    p={2}
                  />
                  {errors.Nationality && (
                    <p className="text-sm text-red-300">
                      {errors.Nationality.message}
                    </p>
                  )}
                </Box>
                <Box>
                  <label htmlFor="religion">Religion</label>
                  <Input
                    {...register("Religion", {
                      required: "Religion is required",
                    })}
                    bg="white"
                    id="religion"
                    placeholder="Type here"
                    _focus={{
                      borderColor: "gray.900",
                      outline: "2px solid blue.900",
                      outlineOffset: "1px",
                    }}
                    border="2px solid gray"
                    p={2}
                  />
                  {errors.Religion && (
                    <p className="text-sm text-red-300">
                      {errors.Religion.message}
                    </p>
                  )}
                </Box>
                <Box>
                  <label htmlFor="language">Language spoken</label>
                  <Input
                    {...register("Language", {
                      required: "Language is required",
                    })}
                    bg="white"
                    id="language"
                    placeholder="Type here"
                    _focus={{
                      borderColor: "gray.900",
                      outline: "2px solid blue.900",
                      outlineOffset: "1px",
                    }}
                    border="2px solid gray"
                    p={2}
                  />
                  {errors.Language && (
                    <p className="text-sm text-red-300">
                      {errors.Language.message}
                    </p>
                  )}
                </Box>
                <Box gridColumn={{ base: "span 1", md: "span 2" }}>
                  <label htmlFor="how">
                    How did you learn about our company?
                  </label>
                  <Input
                    {...register("Media", {
                      required:
                        "Provide where did find the company advertisment",
                    })}
                    bg="white"
                    id="how"
                    placeholder="Type here"
                    _focus={{
                      borderColor: "gray.900",
                      outline: "2px solid blue.900",
                      outlineOffset: "1px",
                    }}
                    border="2px solid gray"
                    p={2}
                  />
                  {errors.Media && (
                    <p className="text-sm text-red-300">
                      {errors.Media.message}
                    </p>
                  )}
                </Box>
                <Box gridColumn={{ base: "span 2", md: "span 4" }}>
                  <label htmlFor="how">
                    Do you have any relative working in our company?
                  </label>
                  <RadioGroup defaultValue="1">
                    <HStack gap="4">
                      <Radio value="1">Yes</Radio>
                      <Radio value="2">No</Radio>
                      <Radio value="3">Not applicable</Radio>
                    </HStack>
                  </RadioGroup>
                </Box>
                <Box gridColumn="span 2">
                  <label htmlFor="how">If yes, Name </label>
                  <Input
                    {...register("Workrelname")}
                    bg="white"
                    id="referal"
                    placeholder="Type here"
                    _focus={{
                      borderColor: "gray.900",
                      outline: "2px solid blue.900",
                      outlineOffset: "1px",
                    }}
                    border="2px solid gray"
                    p={2}
                  />
                </Box>
                <Box gridColumn="span 2">
                  <label htmlFor="referal1">Relationship</label>

                  <Input
                    {...register("Refrel", {
                      required: "Provide answer",
                    })}
                    bg="white"
                    id="referal1"
                    placeholder="Type here"
                    _focus={{
                      borderColor: "gray.900",
                      outline: "2px solid blue.900",
                      outlineOffset: "1px",
                    }}
                    border="2px solid gray"
                    p={2}
                  />
                  {errors.Refrel && (
                    <p className="text-sm text-red-300">
                      {errors.Refrel.message}
                    </p>
                  )}
                </Box>
                <Box gridColumn={{ base: "span 2", md: "span 4" }}>
                  <label htmlFor="how">Are you currently employed?</label>
                  <RadioGroup defaultValue="1">
                    <HStack gap="4">
                      <Radio value="1">Yes</Radio>
                      <Radio value="2">No</Radio>
                    </HStack>
                  </RadioGroup>
                </Box>
                <Box gridColumn="span 2">
                  <label htmlFor="availability">
                    Date available to begin work
                  </label>
                  <Input
                    {...register("Availability", {
                      required: "Provide answer",
                    })}
                    bg="white"
                    id="availability"
                    placeholder="Type here"
                    _focus={{
                      borderColor: "gray.900",
                      outline: "2px solid blue.900",
                      outlineOffset: "1px",
                    }}
                    border="2px solid gray"
                    p={2}
                  />
                  {errors.Availability && (
                    <p className="text-sm text-red-300">
                      {errors.Availability.message}
                    </p>
                  )}
                </Box>
                <Box gridColumn="span 2">
                  <label htmlFor="salary">Salary Expectation</label>
                  <Input
                    {...register("Salary", {
                      required: "Provide answer",
                    })}
                    bg="white"
                    id="salary"
                    placeholder="Type here"
                    _focus={{
                      borderColor: "gray.900",
                      outline: "2px solid blue.900",
                      outlineOffset: "1px",
                    }}
                    border="2px solid gray"
                    p={2}
                  />
                  {errors.Salary && (
                    <p className="text-sm text-red-300">
                      {errors.Salary.message}
                    </p>
                  )}
                </Box>
              </Grid>
            </Box>
          )}

          {/* Family information */}

          {currentTab === "family" && (
            <Box
              as="fieldset"
              borderWidth="1px"
              borderRadius="md"
              p={5}
              borderColor="gray.200"
            >
              <legend className="font-medium text-lg mb-4">
                Family Details
              </legend>
              <Grid templateColumns="repeat(4, 1fr)" gap={4}>
                <Box gridColumn={{ base: "span 2", md: "span 2" }}>
                  <label htmlFor="father-name">Father's Name</label>
                  <Input
                    {...register("Father_name", {
                      required: "Provide answer",
                    })}
                    bg="white"
                    id="father-name"
                    placeholder="Type here"
                    _focus={{
                      borderColor: "gray.900",
                      outline: "2px solid blue.900",
                      outlineOffset: "1px",
                    }}
                    border="2px solid gray"
                    p={2}
                  />
                  {errors.Father_name && (
                    <p className="text-sm text-red-300">
                      {errors.Father_name.message}
                    </p>
                  )}
                </Box>
                <Box gridColumn={{ base: "span 2", md: "span 2" }}>
                  <label htmlFor="father-contact">Contact number</label>
                  <Input
                    {...register("Father_contact", {
                      required: "Provide answer",
                    })}
                    bg="white"
                    id="father-contact"
                    placeholder="Type here"
                    _focus={{
                      borderColor: "gray.900",
                      outline: "2px solid blue.900",
                      outlineOffset: "1px",
                    }}
                    border="2px solid gray"
                    p={2}
                  />
                  {errors.Father_contact && (
                    <p className="text-sm text-red-300">
                      {errors.Father_contact.message}
                    </p>
                  )}
                </Box>
                <Box gridColumn={{ base: "span 2", md: "span 2" }}>
                  <label htmlFor="mother-name">Mother's Name</label>
                  <Input
                    {...register("Mother_name", {
                      required: "Mother_name is required",
                    })}
                    bg="white"
                    id="mother-name"
                    placeholder="Type here"
                    _focus={{
                      borderColor: "gray.900",
                      outline: "2px solid blue.900",
                      outlineOffset: "1px",
                    }}
                    border="2px solid gray"
                    p={2}
                  />
                  {errors.Mother_name && (
                    <p className="text-sm text-red-300">
                      {errors.Mother_name.message}
                    </p>
                  )}
                </Box>
                <Box gridColumn={{ base: "span 2", md: "span 2" }}>
                  <label htmlFor="mother-contact">Contact number</label>
                  <Input
                    {...register("Mother_contact", {
                      required: "Mother_contact is required",
                    })}
                    bg="white"
                    id="mother-contact"
                    placeholder="Type here"
                    _focus={{
                      borderColor: "gray.900",
                      outline: "2px solid blue.900",
                      outlineOffset: "1px",
                    }}
                    border="2px solid gray"
                    p={2}
                  />
                  {errors.Mother_contact && (
                    <p className="text-sm text-red-300">
                      {errors.Mother_contact.message}
                    </p>
                  )}
                </Box>
                <Box gridColumn={{ base: "span 3", md: "span 4" }}>
                  <label htmlFor="parents-address">Address</label>
                  <Input
                    {...register("Parents_address", {
                      required: "Parents_address is required",
                    })}
                    bg="white"
                    id="parents-address"
                    placeholder="House Number, Street, Barangay, City, Province, ZIP code"
                    _focus={{
                      borderColor: "gray.900",
                      outline: "2px solid blue.900",
                      outlineOffset: "1px",
                    }}
                    border="2px solid gray"
                    p={2}
                  />
                  {errors.Parents_address && (
                    <p className="text-sm text-red-300">
                      {errors.Parents_address.message}
                    </p>
                  )}
                </Box>

                <Box gridColumn={{ base: "span 2", md: "span 4" }}>
                  <label htmlFor="how">
                    Number of Siblings (Please list down from Eldest to
                    Youngest)
                  </label>
                  <Box
                    maxWidth="100%"
                    width="100%"
                    p={6}
                    bg="gray.50"
                    boxShadow="lg"
                    borderRadius="lg"
                    _focus={{
                      borderColor: "gray.900",
                      outline: "2px solid blue.900",
                      outlineOffset: "1px",
                    }}
                    border="2px solid gray"
                  >
                    <Stack direction="row" h="50" gap="4">
                      <Box gridColumn={{ base: "span 2", md: "span 3" }} p={2}>
                        <label htmlFor="sibling-names">Siblings Name</label>
                        <Input
                          {...register("Sibling1")}
                          bg="white"
                          id="sibling1"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          {...register("Sibling2")}
                          bg="white"
                          id="sibling2"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          {...register("Sibling3")}
                          bg="white"
                          id="sibling3"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          {...register("Sibling4")}
                          bg="white"
                          id="sibling4"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          {...register("Sibling5")}
                          bg="white"
                          id="sibling5"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                      </Box>
                      <Box gridColumn={{ base: "span 1", md: "span 1" }} p={2}>
                        <label htmlFor="sibling-names">Age</label>
                        <Input
                          {...register("Sibling1Age")}
                          bg="white"
                          id="sibling1"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          {...register("Sibling2Age")}
                          bg="white"
                          id="sibling2"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          {...register("Sibling3Age")}
                          bg="white"
                          id="sibling3"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          {...register("Sibling4Age")}
                          bg="white"
                          id="sibling4"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          {...register("Sibling5Age")}
                          bg="white"
                          id="sibling5"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                      </Box>
                      <Box gridColumn={{ base: "span 2", md: "span 2" }} p={2}>
                        <label htmlFor="sibling-names">Occupation</label>
                        <Input
                          {...register("Sibling1Occu")}
                          bg="white"
                          id="sibling1"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          {...register("Sibling2Occu")}
                          bg="white"
                          id="sibling2"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          {...register("Sibling3Occu")}
                          bg="white"
                          id="sibling3"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          {...register("Sibling4Occu")}
                          bg="white"
                          id="sibling4"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          {...register("Sibling5Occu")}
                          bg="white"
                          id="sibling5"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                      </Box>
                      <Box gridColumn={{ base: "span 2", md: "span 2" }} p={2}>
                        <label htmlFor="sibling-names">Contact #</label>
                        <Input
                          {...register("Sibling1Cont")}
                          bg="white"
                          id="sibling1"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          {...register("Sibling2Cont")}
                          bg="white"
                          id="sibling2"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          {...register("Sibling3Cont")}
                          bg="white"
                          id="sibling3"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          {...register("Sibling4Cont")}
                          bg="white"
                          id="sibling4"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          {...register("Sibling5Cont")}
                          bg="white"
                          id="sibling5"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                      </Box>
                    </Stack>
                  </Box>
                </Box>
                <Box gridColumn={{ base: "span 2", md: "span 2" }}>
                  <legend className="font-medium text-lg mb-2">
                    If married:
                  </legend>
                  <label htmlFor="spouse-name">Spouse's Name</label>
                  <Input
                    {...register("Spousename")}
                    bg="white"
                    id="spouse-name"
                    placeholder="Type here"
                    _focus={{
                      borderColor: "gray.900",
                      outline: "2px solid blue.900",
                      outlineOffset: "1px",
                    }}
                    border="2px solid gray"
                    p={2}
                  />
                </Box>
                <Box colSpan={2} mt={10}>
                  <label htmlFor="children-count">Occupation</label>
                  <Input
                    {...register("SpouseOccu")}
                    bg="white"
                    id="children-count"
                    placeholder="Type here"
                    _focus={{
                      borderColor: "gray.900",
                      outline: "2px solid blue.900",
                      outlineOffset: "1px",
                    }}
                    border="2px solid gray"
                    p={2}
                  />
                </Box>
                <Box colSpan={2} mt={10}>
                  <label htmlFor="mother-contact">Contact number</label>
                  <Input
                    {...register("SpouseCont")}
                    bg="white"
                    id="mother-contact"
                    placeholder="Type here"
                    _focus={{
                      borderColor: "gray.900",
                      outline: "2px solid blue.900",
                      outlineOffset: "1px",
                    }}
                    border="2px solid gray"
                    p={2}
                  />
                </Box>
                <Box gridColumn={{ base: "span 2", md: "span 2" }}>
                  <label htmlFor="spouse-name">Name of Employer</label>
                  <Input
                    {...register("SpouseEmployer")}
                    bg="white"
                    id="spouse-name"
                    placeholder="Type here"
                    _focus={{
                      borderColor: "gray.900",
                      outline: "2px solid blue.900",
                      outlineOffset: "1px",
                    }}
                    border="2px solid gray"
                    p={2}
                  />
                </Box>
                <Box gridColumn={{ base: "span 2", md: "span 2" }}>
                  <label htmlFor="spouse-name">Address of Employer</label>
                  <Input
                    {...register("SpouseAddress")}
                    bg="white"
                    id="spouse-name"
                    placeholder="Type here"
                    _focus={{
                      borderColor: "gray.900",
                      outline: "2px solid blue.900",
                      outlineOffset: "1px",
                    }}
                    border="2px solid gray"
                    p={2}
                  />
                </Box>

                <Box gridColumn={{ base: "span 2", md: "span 4" }}>
                  <label htmlFor="how">Number of Children</label>
                  <Input
                    {...register("Childnum")}
                    bg="white"
                    id="spouse-name"
                    placeholder="Type here"
                    _focus={{
                      borderColor: "gray.900",
                      outline: "2px solid blue.900",
                      outlineOffset: "1px",
                    }}
                    border="2px solid gray"
                    p={2}
                    mb={5}
                  />
                  <Box
                    maxWidth="100%"
                    width="100%"
                    p={6}
                    bg="gray.50"
                    boxShadow="md"
                    borderRadius="lg"
                    _focus={{
                      borderColor: "gray.900",
                      outline: "2px solid blue.900",
                      outlineOffset: "1px",
                    }}
                    border="2px solid gray"
                  >
                    <Stack direction="row" h="50" gap="4">
                      <Box gridColumn={{ base: "span 2", md: "span 3" }} p={2}>
                        <label htmlFor="children-names">Children Name</label>
                        <Input
                          {...register("Childname1")}
                          bg="white"
                          id="child1"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          {...register("Childname2")}
                          bg="white"
                          id="child2"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          {...register("Childname3")}
                          bg="white"
                          id="child3"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          {...register("Childname4")}
                          bg="white"
                          id="child4"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          {...register("Childname5")}
                          bg="white"
                          id="child5"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                      </Box>
                      <Box gridColumn={{ base: "span 2", md: "span 2" }} p={2}>
                        <label htmlFor="dobchild">Date of Birth</label>
                        <Input
                          {...register("Child1birthdate")}
                          bg="white"
                          id="dobchild1"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          {...register("Child2birthdate")}
                          bg="white"
                          id="dobchild2"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          {...register("Child3birthdate")}
                          bg="white"
                          id="dobchild3"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          {...register("Child4birthdate")}
                          bg="white"
                          id="dobchild4"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          {...register("Child5birthdate")}
                          bg="white"
                          id="dobchild5"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                      </Box>
                      <Box gridColumn={{ base: "span 1", md: "span 1" }} p={2}>
                        <label htmlFor="child-age">Age</label>
                        <Input
                          {...register("ChildAge1")}
                          bg="white"
                          id="childage1"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          {...register("ChildAge2")}
                          bg="white"
                          id="childage2"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          {...register("ChildAge3")}
                          bg="white"
                          id="childage3"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          {...register("ChildAge4")}
                          bg="white"
                          id="childage4"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          {...register("ChildAge5")}
                          bg="white"
                          id="childage5"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                      </Box>
                    </Stack>
                  </Box>
                </Box>
                <Box gridColumn={{ base: "span 2", md: "span 2" }}>
                  <legend className="font-medium text-lg mb-2">
                    PERSON TO BE CONTACTED IN CASE OF EMERGENCY
                  </legend>
                  <label htmlFor="emergency-name">Name</label>
                  <Input
                    {...register("Emergency_name", {
                      required: "Emergency contact name is required",
                    })}
                    bg="white"
                    id="emergency-name"
                    placeholder="Type here"
                    _focus={{
                      borderColor: "gray.900",
                      outline: "2px solid blue.900",
                      outlineOffset: "1px",
                    }}
                    border="2px solid gray"
                    p={2}
                  />
                  {errors.Emergency_name && (
                    <p className="text-sm text-red-300">
                      {errors.Emergency_name.message}
                    </p>
                  )}
                </Box>
                <Box colSpan={2} mt={10}>
                  <label htmlFor="relationship-eme">Relationship</label>
                  <Input
                    {...register("Emergency_Rel", {
                      required: "Relationship to emergency contact is required",
                    })}
                    bg="white"
                    id="relationship-eme"
                    type="number"
                    placeholder="Type here"
                    _focus={{
                      borderColor: "gray.900",
                      outline: "2px solid blue.900",
                      outlineOffset: "1px",
                    }}
                    border="2px solid gray"
                    p={2}
                  />
                  {errors.Emergency_Rel && (
                    <p className="text-sm text-red-300">
                      {errors.Emergency_Rel.message}
                    </p>
                  )}
                </Box>
                <Box colSpan={2} mt={10}>
                  <label htmlFor="children-count">Occupation</label>
                  <Input
                    {...register("Emergency_Occu", {
                      required: "Occupation of emergency contact is required",
                    })}
                    bg="white"
                    id="children-count"
                    type="number"
                    placeholder="Type here"
                    _focus={{
                      borderColor: "gray.900",
                      outline: "2px solid blue.900",
                      outlineOffset: "1px",
                    }}
                    border="2px solid gray"
                    p={2}
                  />
                  {errors.Emergency_Occu && (
                    <p className="text-sm text-red-300">
                      {errors.Emergency_Occu.message}
                    </p>
                  )}
                </Box>
                <Box gridColumn={{ base: "span 2", md: "span 2" }}>
                  <label htmlFor="emergency-name">Email</label>
                  <Input
                    {...register("Emergency_Email", {
                      required: "Occupation of emergency contact is required",
                    })}
                    bg="white"
                    id="emergency-name"
                    placeholder="Type here"
                    _focus={{
                      borderColor: "gray.900",
                      outline: "2px solid blue.900",
                      outlineOffset: "1px",
                    }}
                    border="2px solid gray"
                    p={2}
                  />
                  {errors.Emergency_Email && (
                    <p className="text-sm text-red-300">
                      {errors.Emergency_Email.message}
                    </p>
                  )}
                </Box>
                <Box colSpan={2}>
                  <label htmlFor="emergency-contact">Cellphone #</label>
                  <Input
                    {...register("Emergency_Cell", {
                      required: "Occupation of emergency contact is required",
                    })}
                    bg="white"
                    id="emergency-contact"
                    type="number"
                    placeholder="Type here"
                    _focus={{
                      borderColor: "gray.900",
                      outline: "2px solid blue.900",
                      outlineOffset: "1px",
                    }}
                    border="2px solid gray"
                    p={2}
                  />
                  {errors.Emergency_Cell && (
                    <p className="text-sm text-red-300">
                      {errors.Emergency_Cell.message}
                    </p>
                  )}
                </Box>
                <Box colSpan={2}>
                  <label htmlFor="emergency-contact1">Landline</label>
                  <Input
                    {...register("Emergency_Landline", {
                      required: "Occupation of emergency contact is required",
                    })}
                    bg="white"
                    id="emergency-contact1"
                    type="number"
                    placeholder="Type here"
                    _focus={{
                      borderColor: "gray.900",
                      outline: "2px solid blue.900",
                      outlineOffset: "1px",
                    }}
                    border="2px solid gray"
                    p={2}
                  />
                  {errors.Emergency_Landline && (
                    <p className="text-sm text-red-300">
                      {errors.Emergency_Landline.message}
                    </p>
                  )}
                </Box>
              </Grid>
            </Box>
          )}

          {/* Educational information */}
          {currentTab === "education" && (
            <Box
              as="fieldset"
              borderWidth="1px"
              borderRadius="md"
              p={5}
              borderColor="gray.200"
            >
              <legend className="font-medium text-lg mb-4">
                EDUCATION AND CERTIFICATION
              </legend>

              <Box mb={6}>
                <legend className="font-medium text-lg mb-2">
                  POST GRADUATE
                </legend>

                <Box
                  maxWidth="100%"
                  width="100%"
                  p={6}
                  bg="gray.50"
                  boxShadow="md"
                  borderRadius="lg"
                >
                  <Grid templateColumns="repeat(4, 1fr)" gap={4}>
                    <Box gridColumn="span 2">
                      <label htmlFor="post-grad-schoolname">
                        Name of School
                      </label>
                      <Input
                        {...register("Postschoolname")}
                        bg="white"
                        id="post-grad-schoolname"
                        placeholder="Type here"
                        _focus={{
                          borderColor: "gray.900",
                          outline: "2px solid blue.900",
                          outlineOffset: "1px",
                        }}
                        border="2px solid gray"
                        p={2}
                      />
                    </Box>

                    <Box gridColumn="span 2">
                      <label htmlFor="post-grad-loc">Location</label>
                      <Input
                        {...register("Postschoolloc")}
                        bg="white"
                        id="post-grad-loc"
                        placeholder="Type here"
                        _focus={{
                          borderColor: "gray.900",
                          outline: "2px solid blue.900",
                          outlineOffset: "1px",
                        }}
                        border="2px solid gray"
                        p={2}
                      />
                    </Box>

                    <Box gridColumn="span 2">
                      <label htmlFor="post-grad-major">Degree/Major</label>
                      <Input
                        {...register("PostschoolDeg")}
                        bg="white"
                        id="apost-grad-major"
                        placeholder="Type here"
                        _focus={{
                          borderColor: "gray.900",
                          outline: "2px solid blue.900",
                          outlineOffset: "1px",
                        }}
                        border="2px solid gray"
                        p={2}
                      />
                    </Box>

                    <Box gridColumn="span 1">
                      <label htmlFor="post-grad-from">From Date</label>
                      <Input
                        {...register("Postschoolstart")}
                        bg="white"
                        id="post-grad-from"
                        placeholder="Type here"
                        _focus={{
                          borderColor: "gray.900",
                          outline: "2px solid blue.900",
                          outlineOffset: "1px",
                        }}
                        border="2px solid gray"
                        p={2}
                      />
                    </Box>
                    <Box gridColumn="span 1">
                      <label htmlFor="post-grad-to">To Date</label>
                      <Input
                        {...register("Postschoolend")}
                        bg="white"
                        id="post-grad-to"
                        placeholder="Type here"
                        _focus={{
                          borderColor: "gray.900",
                          outline: "2px solid blue.900",
                          outlineOffset: "1px",
                        }}
                        border="2px solid gray"
                        p={2}
                      />
                    </Box>

                    <Box gridColumn="span 2">
                      <label htmlFor="post-grad-diploma">
                        Type of Diploma Obtained
                      </label>
                      <Input
                        {...register("Postschooldiploma")}
                        bg="white"
                        id="post-grad-diploma"
                        placeholder="Type here"
                        _focus={{
                          borderColor: "gray.900",
                          outline: "2px solid blue.900",
                          outlineOffset: "1px",
                        }}
                        border="2px solid gray"
                        p={2}
                      />
                    </Box>
                  </Grid>
                </Box>
              </Box>
              <Box mb={6}>
                <legend className="font-medium text-lg mb-2">COLLEGIATE</legend>

                <Box
                  maxWidth="100%"
                  width="100%"
                  p={6}
                  bg="gray.50"
                  boxShadow="md"
                  borderRadius="lg"
                >
                  <Grid templateColumns="repeat(4, 1fr)" gap={4}>
                    <Box gridColumn="span 2">
                      <label htmlFor="college-school">Name of School</label>
                      <Input
                        {...register("Colschoolname")}
                        bg="white"
                        id="college-school"
                        placeholder="Type here"
                        _focus={{
                          borderColor: "gray.900",
                          outline: "2px solid blue.900",
                          outlineOffset: "1px",
                        }}
                        border="2px solid gray"
                        p={2}
                      />
                    </Box>

                    <Box gridColumn="span 2">
                      <label htmlFor="college-loc">Location</label>
                      <Input
                        {...register("Colschoolloc")}
                        bg="white"
                        id="college-loc"
                        placeholder="Type here"
                        _focus={{
                          borderColor: "gray.900",
                          outline: "2px solid blue.900",
                          outlineOffset: "1px",
                        }}
                        border="2px solid gray"
                        p={2}
                      />
                    </Box>

                    <Box gridColumn="span 2">
                      <label htmlFor="college-major">Degree/Major</label>
                      <Input
                        {...register("Colschooldeg")}
                        bg="white"
                        id="college-major"
                        placeholder="Type here"
                        _focus={{
                          borderColor: "gray.900",
                          outline: "2px solid blue.900",
                          outlineOffset: "1px",
                        }}
                        border="2px solid gray"
                        p={2}
                      />
                    </Box>

                    <Box gridColumn="span 1">
                      <label htmlFor="college-from">From Date</label>
                      <Input
                        {...register("Colschoolstart")}
                        bg="white"
                        id="college-from"
                        placeholder="Type here"
                        _focus={{
                          borderColor: "gray.900",
                          outline: "2px solid blue.900",
                          outlineOffset: "1px",
                        }}
                        border="2px solid gray"
                        p={2}
                      />
                    </Box>
                    <Box gridColumn="span 1">
                      <label htmlFor="college-to">To Date</label>
                      <Input
                        {...register("Colschoolend")}
                        bg="white"
                        id="college-to"
                        placeholder="Type here"
                        _focus={{
                          borderColor: "gray.900",
                          outline: "2px solid blue.900",
                          outlineOffset: "1px",
                        }}
                        border="2px solid gray"
                        p={2}
                      />
                    </Box>

                    <Box gridColumn="span 2">
                      <label htmlFor="college-diploma">
                        Type of Diploma Obtained
                      </label>
                      <Input
                        {...register("ColschoolDiploma")}
                        bg="white"
                        id="college-diploma"
                        placeholder="Type here"
                        _focus={{
                          borderColor: "gray.900",
                          outline: "2px solid blue.900",
                          outlineOffset: "1px",
                        }}
                        border="2px solid gray"
                        p={2}
                      />
                    </Box>
                  </Grid>
                </Box>
              </Box>
              <Box mb={6}>
                <legend className="font-medium text-lg mb-2">
                  TRADE SCHOOL OR OTHER VOCATIONAL COURSE
                </legend>

                <Box
                  maxWidth="100%"
                  width="100%"
                  p={6}
                  bg="gray.50"
                  boxShadow="md"
                  borderRadius="lg"
                >
                  <Grid templateColumns="repeat(4, 1fr)" gap={4}>
                    <Box gridColumn="span 2">
                      <label htmlFor="vocational-school">Name of School</label>
                      <Input
                        {...register("Vocschoolname")}
                        bg="white"
                        id="vocational-school"
                        placeholder="Type here"
                        _focus={{
                          borderColor: "gray.900",
                          outline: "2px solid blue.900",
                          outlineOffset: "1px",
                        }}
                        border="2px solid gray"
                        p={2}
                      />
                    </Box>

                    <Box gridColumn="span 2">
                      <label htmlFor="vocational-loc">Location</label>
                      <Input
                        {...register("Vocschoolloc")}
                        bg="white"
                        id="vocational-loc"
                        placeholder="Type here"
                        _focus={{
                          borderColor: "gray.900",
                          outline: "2px solid blue.900",
                          outlineOffset: "1px",
                        }}
                        border="2px solid gray"
                        p={2}
                      />
                    </Box>

                    <Box gridColumn="span 2">
                      <label htmlFor="vocational-major">Degree/Major</label>
                      <Input
                        {...register("VocschoolDeg")}
                        bg="white"
                        id="vocational-major"
                        placeholder="Type here"
                        _focus={{
                          borderColor: "gray.900",
                          outline: "2px solid blue.900",
                          outlineOffset: "1px",
                        }}
                        border="2px solid gray"
                        p={2}
                      />
                    </Box>

                    <Box gridColumn="span 1">
                      <label htmlFor="vocational-from">From Date</label>
                      <Input
                        {...register("Vocschoolstart")}
                        bg="white"
                        id="vocational-from"
                        placeholder="Type here"
                        _focus={{
                          borderColor: "gray.900",
                          outline: "2px solid blue.900",
                          outlineOffset: "1px",
                        }}
                        border="2px solid gray"
                        p={2}
                      />
                    </Box>
                    <Box gridColumn="span 1">
                      <label htmlFor="vocational-to">To Date</label>
                      <Input
                        {...register("Vocschoolend")}
                        bg="white"
                        id="vocational-to"
                        placeholder="Type here"
                        _focus={{
                          borderColor: "gray.900",
                          outline: "2px solid blue.900",
                          outlineOffset: "1px",
                        }}
                        border="2px solid gray"
                        p={2}
                      />
                    </Box>

                    <Box gridColumn="span 2">
                      <label htmlFor="vocational-diploma">
                        Type of Diploma Obtained
                      </label>
                      <Input
                        {...register("Vocschooldiploma")}
                        bg="white"
                        id="vocational-diploma"
                        placeholder="Type here"
                        _focus={{
                          borderColor: "gray.900",
                          outline: "2px solid blue.900",
                          outlineOffset: "1px",
                        }}
                        border="2px solid gray"
                        p={2}
                      />
                    </Box>
                  </Grid>
                </Box>
              </Box>
              <Box mb={6}>
                <legend className="font-medium text-lg mb-2">SECONDARY</legend>

                <Box
                  maxWidth="100%"
                  width="100%"
                  p={6}
                  bg="gray.50"
                  boxShadow="md"
                  borderRadius="lg"
                >
                  <Grid templateColumns="repeat(4, 1fr)" gap={4}>
                    <Box gridColumn="span 2">
                      <label htmlFor="secondary-school">Name of School</label>
                      <Input
                        {...register("Seconschoolname", {
                          required: "secondary school name is required",
                        })}
                        bg="white"
                        id="secondary-school"
                        placeholder="Type here"
                        _focus={{
                          borderColor: "gray.900",
                          outline: "2px solid blue.900",
                          outlineOffset: "1px",
                        }}
                        border="2px solid gray"
                        p={2}
                      />
                      {errors.Seconschoolname && (
                        <p className="text-sm text-red-300">
                          {errors.Seconschoolname.message}
                        </p>
                      )}
                    </Box>

                    <Box gridColumn="span 2">
                      <label htmlFor="secondary-loc">Location</label>
                      <Input
                        {...register("Seconschoolloc", {
                          required: "secondary school location is required",
                        })}
                        bg="white"
                        id="secondary-loc"
                        placeholder="Type here"
                        _focus={{
                          borderColor: "gray.900",
                          outline: "2px solid blue.900",
                          outlineOffset: "1px",
                        }}
                        border="2px solid gray"
                        p={2}
                      />
                      {errors.Seconschoolloc && (
                        <p className="text-sm text-red-300">
                          {errors.Seconschoolloc.message}
                        </p>
                      )}
                    </Box>

                    <Box gridColumn="span 2">
                      <label htmlFor="secondary-major">Degree/Major</label>
                      <Input
                        {...register("Seconschooldeg", {
                          required: "secondary school degree is required",
                        })}
                        bg="white"
                        id="secondary-major"
                        placeholder="Type here"
                        _focus={{
                          borderColor: "gray.900",
                          outline: "2px solid blue.900",
                          outlineOffset: "1px",
                        }}
                        border="2px solid gray"
                        p={2}
                      />
                      {errors.Seconschooldeg && (
                        <p className="text-sm text-red-300">
                          {errors.Seconschooldeg.message}
                        </p>
                      )}
                    </Box>

                    <Box gridColumn="span 1">
                      <label htmlFor="secondary-from">From Date</label>
                      <Input
                        {...register("Seconschoolstart", {
                          required: "secondary school start is required",
                        })}
                        bg="white"
                        id="secondary-from"
                        placeholder="Type here"
                        _focus={{
                          borderColor: "gray.900",
                          outline: "2px solid blue.900",
                          outlineOffset: "1px",
                        }}
                        border="2px solid gray"
                        p={2}
                      />
                      {errors.Seconschoolstart && (
                        <p className="text-sm text-red-300">
                          {errors.Seconschoolstart.message}
                        </p>
                      )}
                    </Box>
                    <Box gridColumn="span 1">
                      <label htmlFor="secondary-to">To Date</label>
                      <Input
                        {...register("Seconschoolend", {
                          required: "secondary school end is required",
                        })}
                        bg="white"
                        id="secondary-to"
                        placeholder="Type here"
                        _focus={{
                          borderColor: "gray.900",
                          outline: "2px solid blue.900",
                          outlineOffset: "1px",
                        }}
                        border="2px solid gray"
                        p={2}
                      />
                      {errors.Seconschoolend && (
                        <p className="text-sm text-red-300">
                          {errors.Seconschoolend.message}
                        </p>
                      )}
                    </Box>

                    <Box gridColumn="span 2">
                      <label htmlFor="secondary-diploma">
                        Type of Diploma Obtained
                      </label>
                      <Input
                        {...register("Seconschooldip", {
                          required:
                            "secondary school diploma obtained is required",
                        })}
                        bg="white"
                        id="secondary-diploma"
                        placeholder="Type here"
                        _focus={{
                          borderColor: "gray.900",
                          outline: "2px solid blue.900",
                          outlineOffset: "1px",
                        }}
                        border="2px solid gray"
                        p={2}
                      />
                      {errors.Seconschooldip && (
                        <p className="text-sm text-red-300">
                          {errors.Seconschooldip.message}
                        </p>
                      )}
                    </Box>
                  </Grid>
                </Box>
              </Box>
              <Box mb={6}>
                <legend className="font-medium text-lg mb-2">ELEMENTARY</legend>

                <Box
                  maxWidth="100%"
                  width="100%"
                  p={6}
                  bg="gray.50"
                  boxShadow="md"
                  borderRadius="lg"
                >
                  <Grid templateColumns="repeat(4, 1fr)" gap={4}>
                    <Box gridColumn="span 2">
                      <label htmlFor="elementary-school">Name of School</label>
                      <Input
                        {...register("Elemschoolname", {
                          required: "Elementary school name is required",
                        })}
                        bg="white"
                        id="elementary-school"
                        placeholder="Type here"
                        _focus={{
                          borderColor: "gray.900",
                          outline: "2px solid blue.900",
                          outlineOffset: "1px",
                        }}
                        border="2px solid gray"
                        p={2}
                      />
                      {errors.Elemschoolname && (
                        <p className="text-sm text-red-300">
                          {errors.Elemschoolname.message}
                        </p>
                      )}
                    </Box>

                    <Box gridColumn="span 2">
                      <label htmlFor="elementary-loc">Location</label>
                      <Input
                        {...register("Elemschoolloc", {
                          required: "Elementary school location is required",
                        })}
                        bg="white"
                        id="elementary-loc"
                        placeholder="Type here"
                        _focus={{
                          borderColor: "gray.900",
                          outline: "2px solid blue.900",
                          outlineOffset: "1px",
                        }}
                        border="2px solid gray"
                        p={2}
                      />
                      {errors.Elemschoolloc && (
                        <p className="text-sm text-red-300">
                          {errors.Elemschoolloc.message}
                        </p>
                      )}
                    </Box>

                    <Box gridColumn="span 2">
                      <label htmlFor="elementary-major">Degree/Major</label>
                      <Input
                        {...register("Elemschooldeg", {
                          required: "Elementary school degree is required",
                        })}
                        bg="white"
                        id="elementary-major"
                        placeholder="Type here"
                        _focus={{
                          borderColor: "gray.900",
                          outline: "2px solid blue.900",
                          outlineOffset: "1px",
                        }}
                        border="2px solid gray"
                        p={2}
                      />
                      {errors.Elemschooldeg && (
                        <p className="text-sm text-red-300">
                          {errors.Elemschooldeg.message}
                        </p>
                      )}
                    </Box>

                    <Box gridColumn="span 1">
                      <label htmlFor="elementary-from">From Date</label>
                      <Input
                        {...register("Elemschoolstart", {
                          required: "Elementary school start is required",
                        })}
                        bg="white"
                        id="elementary-from"
                        placeholder="Type here"
                        _focus={{
                          borderColor: "gray.900",
                          outline: "2px solid blue.900",
                          outlineOffset: "1px",
                        }}
                        border="2px solid gray"
                        p={2}
                      />
                      {errors.Elemschoolstart && (
                        <p className="text-sm text-red-300">
                          {errors.Elemschoolstart.message}
                        </p>
                      )}
                    </Box>
                    <Box gridColumn="span 1">
                      <label htmlFor="elementary-to">To Date</label>
                      <Input
                        {...register("Elemschoolend", {
                          required: "Elementary school end is required",
                        })}
                        bg="white"
                        id="elementary-to"
                        placeholder="Type here"
                        _focus={{
                          borderColor: "gray.900",
                          outline: "2px solid blue.900",
                          outlineOffset: "1px",
                        }}
                        border="2px solid gray"
                        p={2}
                      />
                      {errors.Elemschoolend && (
                        <p className="text-sm text-red-300">
                          {errors.Elemschoolend.message}
                        </p>
                      )}
                    </Box>

                    <Box gridColumn="span 2">
                      <label htmlFor="elementary-diploma">
                        Type of Diploma Obtained
                      </label>
                      <Input
                        {...register("Elemschooldip", {
                          required: "Elementary school diploma is required",
                        })}
                        bg="white"
                        id="elementary-diploma"
                        placeholder="Type here"
                        _focus={{
                          borderColor: "gray.900",
                          outline: "2px solid blue.900",
                          outlineOffset: "1px",
                        }}
                        border="2px solid gray"
                        p={2}
                      />
                      {errors.Elemschooldip && (
                        <p className="text-sm text-red-300">
                          {errors.Elemschooldip.message}
                        </p>
                      )}
                    </Box>
                  </Grid>
                </Box>
              </Box>
              <Box
                maxWidth="100%"
                width="100%"
                p={6}
                bg="gray.50"
                boxShadow="md"
                borderRadius="lg"
              >
                <Grid templateColumns="repeat(4, 1fr)" gap={4}>
                  <Box gridColumn="span 2">
                    <label htmlFor="ncee-rate">NCEE Rating</label>
                    <Input
                      {...register("nceerating")}
                      bg="white"
                      id="ncee-rate"
                      placeholder="Type here"
                      _focus={{
                        borderColor: "gray.900",
                        outline: "2px solid blue.900",
                        outlineOffset: "1px",
                      }}
                      border="2px solid gray"
                      p={2}
                    />
                  </Box>

                  <Box gridColumn="span 2">
                    <label htmlFor="nsat-rate">NSAT Rating</label>
                    <Input
                      {...register("nsat")}
                      bg="white"
                      id="nsat-rate"
                      placeholder="Type here"
                      _focus={{
                        borderColor: "gray.900",
                        outline: "2px solid blue.900",
                        outlineOffset: "1px",
                      }}
                      border="2px solid gray"
                      p={2}
                    />
                  </Box>

                  <Box gridColumn="span 2">
                    <label htmlFor="govt-license">Gov't Licensure Exam </label>
                    <Input
                      {...register("govtlicense")}
                      bg="white"
                      id="govt-license"
                      placeholder="Type here"
                      _focus={{
                        borderColor: "gray.900",
                        outline: "2px solid blue.900",
                        outlineOffset: "1px",
                      }}
                      border="2px solid gray"
                      p={2}
                    />
                  </Box>
                  <Box gridColumn="span 2">
                    <label htmlFor="ratings">Ratings </label>
                    <Input
                      {...register("rating")}
                      bg="white"
                      id="ratings"
                      placeholder="Type here"
                      _focus={{
                        borderColor: "gray.900",
                        outline: "2px solid blue.900",
                        outlineOffset: "1px",
                      }}
                      border="2px solid gray"
                      p={2}
                    />
                  </Box>
                  <label htmlFor="driverlicense">
                    Do you have Driver's License?
                  </label>
                  <RadioGroup defaultValue="1">
                    <HStack gap="4">
                      <Radio value="1">Yes</Radio>
                      <Radio value="2">No</Radio>
                    </HStack>
                  </RadioGroup>
                  <Box gridColumn="span 2">
                    <label htmlFor="license-num">
                      Driver's License number{" "}
                    </label>
                    <Input
                      {...register("license")}
                      bg="white"
                      id="license-num"
                      placeholder="Type here"
                      _focus={{
                        borderColor: "gray.900",
                        outline: "2px solid blue.900",
                        outlineOffset: "1px",
                      }}
                      border="2px solid gray"
                      p={2}
                    />
                  </Box>
                  <Box gridColumn="span 3">
                    <label htmlFor="transpo-means">
                      What is your means of transportation to work?{" "}
                    </label>
                    <Input
                      {...register("transpo")}
                      bg="white"
                      id="transpo-means"
                      placeholder="Type here"
                      _focus={{
                        borderColor: "gray.900",
                        outline: "2px solid blue.900",
                        outlineOffset: "1px",
                      }}
                      border="2px solid gray"
                      p={2}
                    />
                  </Box>
                </Grid>
              </Box>
            </Box>
          )}

          {/* Employment History */}
          {currentTab === "employment" && (
            <Box
              as="fieldset"
              borderWidth="1px"
              borderRadius="md"
              p={5}
              borderColor="gray.200"
            >
              <legend className="font-medium text-lg mb-4">
                Employment History
              </legend>
              <legend className="font-medium text-lg mb-4">
                (Please list down beginning your most recent job)
              </legend>

              <Box
                maxWidth="100%"
                width="100%"
                p={6}
                bg="gray.50"
                boxShadow="md"
                borderRadius="lg"
              >
                <legend className="font-medium text-lg mb-2">Employer 1</legend>
                <Grid templateColumns="repeat(4, 1fr)" gap={4}>
                  <Box gridColumn="span 2">
                    <label htmlFor="employer1">Name of Employer</label>
                    <Input
                      {...register("expemployername1")}
                      bg="white"
                      id="employer1"
                      placeholder="Type here"
                      _focus={{
                        borderColor: "gray.900",
                        outline: "2px solid blue.900",
                        outlineOffset: "1px",
                      }}
                      border="2px solid gray"
                      p={2}
                    />
                  </Box>

                  <Box gridColumn="span 2">
                    <label htmlFor="employer1-address">Address</label>
                    <Input
                      {...register("expemployeraddress1")}
                      bg="white"
                      id="employer1-address"
                      placeholder="Type here"
                      _focus={{
                        borderColor: "gray.900",
                        outline: "2px solid blue.900",
                        outlineOffset: "1px",
                      }}
                      border="2px solid gray"
                      p={2}
                    />
                  </Box>

                  <Box gridColumn="span 2">
                    <label htmlFor="employer1-degree">Degree/Major</label>
                    <Input
                      {...register("expemployerdeg1")}
                      bg="white"
                      id="employer1-degree"
                      placeholder="Type here"
                      _focus={{
                        borderColor: "gray.900",
                        outline: "2px solid blue.900",
                        outlineOffset: "1px",
                      }}
                      border="2px solid gray"
                      p={2}
                    />
                  </Box>
                  <Box gridColumn="span 2">
                    <label htmlFor="employer1-diploma">
                      Type of Diploma Obtained
                    </label>
                    <Input
                      {...register("expemployerdip1")}
                      bg="white"
                      id="employer1-diploma"
                      placeholder="Type here"
                      _focus={{
                        borderColor: "gray.900",
                        outline: "2px solid blue.900",
                        outlineOffset: "1px",
                      }}
                      border="2px solid gray"
                      p={2}
                    />
                  </Box>
                  <Box gridColumn="span 2">
                    <label htmlFor="employer1-position">Position</label>
                    <Input
                      {...register("expemployerpos1")}
                      bg="white"
                      id="employer1-position"
                      placeholder="Type here"
                      _focus={{
                        borderColor: "gray.900",
                        outline: "2px solid blue.900",
                        outlineOffset: "1px",
                      }}
                      border="2px solid gray"
                      p={2}
                    />
                  </Box>
                  <Box gridColumn="span 2">
                    <label htmlFor="employer1-rate">Payrate:</label>
                    <Input
                      {...register("expemployerpayrate1")}
                      bg="white"
                      id="employer1-rate"
                      placeholder="Type here"
                      _focus={{
                        borderColor: "gray.900",
                        outline: "2px solid blue.900",
                        outlineOffset: "1px",
                      }}
                      border="2px solid gray"
                      p={2}
                    />
                  </Box>

                  <Box gridColumn="span 2">
                    <legend className="font-small text-md mt-2 mb-2">
                      Date employed:{" "}
                    </legend>
                    <label htmlFor="employer1-from">From Date:</label>
                    <Input
                      {...register("expemployerstart1")}
                      bg="white"
                      id="employer1-from"
                      placeholder="Type here"
                      _focus={{
                        borderColor: "gray.900",
                        outline: "2px solid blue.900",
                        outlineOffset: "1px",
                      }}
                      border="2px solid gray"
                      p={2}
                    />
                  </Box>
                  <Box gridColumn="span 2" mt={10}>
                    <label htmlFor="employer1-to">To Date:</label>
                    <Input
                      {...register("expemployerend1")}
                      bg="white"
                      id="employer1-to"
                      placeholder="Type here"
                      _focus={{
                        borderColor: "gray.900",
                        outline: "2px solid blue.900",
                        outlineOffset: "1px",
                      }}
                      border="2px solid gray"
                      p={2}
                    />
                  </Box>
                  <Box gridColumn="span 2">
                    <label htmlFor="employer1-phone">Work Phone Number:</label>
                    <Input
                      {...register("expemployerwork1")}
                      bg="white"
                      id="employer1-phone"
                      placeholder="Type here"
                      _focus={{
                        borderColor: "gray.900",
                        outline: "2px solid blue.900",
                        outlineOffset: "1px",
                      }}
                      border="2px solid gray"
                      p={2}
                    />
                  </Box>
                  <Box gridColumn="span 2">
                    <label htmlFor="employer1-superior-contact">
                      Immediate Superior Contact #:
                    </label>
                    <Input
                      {...register("expemployersupContact1")}
                      bg="white"
                      id="employer1-superior-contact"
                      placeholder="Type here"
                      _focus={{
                        borderColor: "gray.900",
                        outline: "2px solid blue.900",
                        outlineOffset: "1px",
                      }}
                      border="2px solid gray"
                      p={2}
                    />
                  </Box>
                  <Box gridColumn="span 4">
                    <label htmlFor="employer1-function">
                      Job Function & Responsibilities
                    </label>
                    <Input
                      {...register("expemployerjobfunc1")}
                      bg="white"
                      id="employer1-function"
                      placeholder="Type here"
                      _focus={{
                        borderColor: "gray.900",
                        outline: "2px solid blue.900",
                        outlineOffset: "1px",
                      }}
                      border="2px solid gray"
                      p={2}
                    />
                  </Box>
                  <Box gridColumn="span 3">
                    <label htmlFor="employer1-reason">
                      Reason for Leaving:
                    </label>
                    <Input
                      {...register("whyleave1")}
                      bg="white"
                      id="employer1-reason"
                      placeholder="Type here"
                      _focus={{
                        borderColor: "gray.900",
                        outline: "2px solid blue.900",
                        outlineOffset: "1px",
                      }}
                      border="2px solid gray"
                      p={2}
                    />
                  </Box>
                </Grid>
              </Box>

              <Box
                maxWidth="100%"
                width="100%"
                p={6}
                bg="gray.50"
                boxShadow="md"
                borderRadius="lg"
                mt={5}
              >
                <legend className="font-medium text-lg mb-2">Employer 2</legend>
                <Grid templateColumns="repeat(4, 1fr)" gap={4}>
                  <Box gridColumn="span 2">
                    <label htmlFor="employer2">Name of Employer</label>
                    <Input
                      {...register("expemployername2")}
                      bg="white"
                      id="employer2"
                      placeholder="Type here"
                      _focus={{
                        borderColor: "gray.900",
                        outline: "2px solid blue.900",
                        outlineOffset: "1px",
                      }}
                      border="2px solid gray"
                      p={2}
                    />
                  </Box>

                  <Box gridColumn="span 2">
                    <label htmlFor="employer2-address">Address</label>
                    <Input
                      {...register("expemployeraddress2")}
                      bg="white"
                      id="employer2-address"
                      placeholder="Type here"
                      _focus={{
                        borderColor: "gray.900",
                        outline: "2px solid blue.900",
                        outlineOffset: "1px",
                      }}
                      border="2px solid gray"
                      p={2}
                    />
                  </Box>

                  <Box gridColumn="span 2">
                    <label htmlFor="employer2-major">Degree/Major</label>
                    <Input
                      {...register("expemployerdeg2")}
                      bg="white"
                      id="employer2-major"
                      placeholder="Type here"
                      _focus={{
                        borderColor: "gray.900",
                        outline: "2px solid blue.900",
                        outlineOffset: "1px",
                      }}
                      border="2px solid gray"
                      p={2}
                    />
                  </Box>
                  <Box gridColumn="span 2">
                    <label htmlFor="employer2-diploma">
                      Type of Diploma Obtained
                    </label>
                    <Input
                      {...register("expemployerdip2")}
                      bg="white"
                      id="employer2-diploma"
                      placeholder="Type here"
                      _focus={{
                        borderColor: "gray.900",
                        outline: "2px solid blue.900",
                        outlineOffset: "1px",
                      }}
                      border="2px solid gray"
                      p={2}
                    />
                  </Box>
                  <Box gridColumn="span 2">
                    <label htmlFor="employer2-position">Position</label>
                    <Input
                      {...register("expemployerpos2")}
                      bg="white"
                      id="employer2-position"
                      placeholder="Type here"
                      _focus={{
                        borderColor: "gray.900",
                        outline: "2px solid blue.900",
                        outlineOffset: "1px",
                      }}
                      border="2px solid gray"
                      p={2}
                    />
                  </Box>
                  <Box gridColumn="span 2">
                    <label htmlFor="employer2-rate">Payrate:</label>
                    <Input
                      {...register("expemployerpayrate2")}
                      bg="white"
                      id="employer2-rate"
                      placeholder="Type here"
                      _focus={{
                        borderColor: "gray.900",
                        outline: "2px solid blue.900",
                        outlineOffset: "1px",
                      }}
                      border="2px solid gray"
                      p={2}
                    />
                  </Box>

                  <Box gridColumn="span 2">
                    <legend className="font-small text-md mt-2 mb-2">
                      Date employed:{" "}
                    </legend>
                    <label htmlFor="employer2-from">From Date:</label>
                    <Input
                      {...register("expemployerstart2")}
                      bg="white"
                      id="employer2-from"
                      placeholder="Type here"
                      _focus={{
                        borderColor: "gray.900",
                        outline: "2px solid blue.900",
                        outlineOffset: "1px",
                      }}
                      border="2px solid gray"
                      p={2}
                    />
                  </Box>
                  <Box gridColumn="span 2" mt={10}>
                    <label htmlFor="employer2-to">To Date:</label>
                    <Input
                      {...register("expemployerend2")}
                      bg="white"
                      id="employer2-to"
                      placeholder="Type here"
                      _focus={{
                        borderColor: "gray.900",
                        outline: "2px solid blue.900",
                        outlineOffset: "1px",
                      }}
                      border="2px solid gray"
                      p={2}
                    />
                  </Box>
                  <Box gridColumn="span 2">
                    <label htmlFor="employer2-phone">Work Phone Number:</label>
                    <Input
                      {...register("expemployerwork2")}
                      bg="white"
                      id="employer2-phone"
                      placeholder="Type here"
                      _focus={{
                        borderColor: "gray.900",
                        outline: "2px solid blue.900",
                        outlineOffset: "1px",
                      }}
                      border="2px solid gray"
                      p={2}
                    />
                  </Box>
                  <Box gridColumn="span 2">
                    <label htmlFor="employer2-superior">
                      Immediate Superior Contact #:
                    </label>
                    <Input
                      {...register("expemployersupContact2")}
                      bg="white"
                      id="employer2-superior"
                      placeholder="Type here"
                      _focus={{
                        borderColor: "gray.900",
                        outline: "2px solid blue.900",
                        outlineOffset: "1px",
                      }}
                      border="2px solid gray"
                      p={2}
                    />
                  </Box>
                  <Box gridColumn="span 4">
                    <label htmlFor="employer2-function">
                      Job Function & Responsibilities
                    </label>
                    <Input
                      {...register("expemployerjobfunc2")}
                      bg="white"
                      id="employer2-function"
                      placeholder="Type here"
                      _focus={{
                        borderColor: "gray.900",
                        outline: "2px solid blue.900",
                        outlineOffset: "1px",
                      }}
                      border="2px solid gray"
                      p={2}
                    />
                  </Box>
                  <Box gridColumn="span 3">
                    <label htmlFor="employer2-reason">
                      Reason for Leaving:
                    </label>
                    <Input
                      {...register("whyleave2")}
                      bg="white"
                      id="employer2-reason"
                      placeholder="Type here"
                      _focus={{
                        borderColor: "gray.900",
                        outline: "2px solid blue.900",
                        outlineOffset: "1px",
                      }}
                      border="2px solid gray"
                      p={2}
                    />
                  </Box>
                </Grid>
              </Box>

              <Box
                maxWidth="100%"
                width="100%"
                p={6}
                bg="gray.50"
                boxShadow="md"
                borderRadius="lg"
                mt={5}
              >
                <legend className="font-medium text-lg mb-2">Employer 3</legend>
                <Grid templateColumns="repeat(4, 1fr)" gap={4}>
                  <Box gridColumn="span 2">
                    <label htmlFor="employer3">Name of Employer</label>
                    <Input
                      {...register("expemployername3")}
                      bg="white"
                      id="employer3"
                      placeholder="Type here"
                      _focus={{
                        borderColor: "gray.900",
                        outline: "2px solid blue.900",
                        outlineOffset: "1px",
                      }}
                      border="2px solid gray"
                      p={2}
                    />
                  </Box>

                  <Box gridColumn="span 2">
                    <label htmlFor="employer3-address">Address</label>
                    <Input
                      {...register("expemployeraddress3")}
                      bg="white"
                      id="employer3-address"
                      placeholder="Type here"
                      _focus={{
                        borderColor: "gray.900",
                        outline: "2px solid blue.900",
                        outlineOffset: "1px",
                      }}
                      border="2px solid gray"
                      p={2}
                    />
                  </Box>

                  <Box gridColumn="span 2">
                    <label htmlFor="employer3-degree">Degree/Major</label>
                    <Input
                      {...register("expemployerdeg3")}
                      bg="white"
                      id="employer3-degree"
                      placeholder="Type here"
                      _focus={{
                        borderColor: "gray.900",
                        outline: "2px solid blue.900",
                        outlineOffset: "1px",
                      }}
                      border="2px solid gray"
                      p={2}
                    />
                  </Box>
                  <Box gridColumn="span 2">
                    <label htmlFor="employer3-diploma">
                      Type of Diploma Obtained
                    </label>
                    <Input
                      {...register("expemployerdip3")}
                      bg="white"
                      id="employer3-diploma"
                      placeholder="Type here"
                      _focus={{
                        borderColor: "gray.900",
                        outline: "2px solid blue.900",
                        outlineOffset: "1px",
                      }}
                      border="2px solid gray"
                      p={2}
                    />
                  </Box>
                  <Box gridColumn="span 2">
                    <label htmlFor="employer3-position">Position</label>
                    <Input
                      bg="white"
                      {...register("expemployerpos3")}
                      id="employer3-position"
                      placeholder="Type here"
                      _focus={{
                        borderColor: "gray.900",
                        outline: "2px solid blue.900",
                        outlineOffset: "1px",
                      }}
                      border="2px solid gray"
                      p={2}
                    />
                  </Box>
                  <Box gridColumn="span 2">
                    <label htmlFor="employer3-rate">Payrate:</label>
                    <Input
                      bg="white"
                      {...register("expemployerpayrate3")}
                      id="employer3-rate"
                      placeholder="Type here"
                      _focus={{
                        borderColor: "gray.900",
                        outline: "2px solid blue.900",
                        outlineOffset: "1px",
                      }}
                      border="2px solid gray"
                      p={2}
                    />
                  </Box>

                  <Box gridColumn="span 2">
                    <legend className="font-small text-md mt-2 mb-2">
                      Date employed:{" "}
                    </legend>
                    <label htmlFor="employer3-from">From Date:</label>
                    <Input
                      {...register("expemployerstart3")}
                      bg="white"
                      id="employer3-from"
                      placeholder="Type here"
                      _focus={{
                        borderColor: "gray.900",
                        outline: "2px solid blue.900",
                        outlineOffset: "1px",
                      }}
                      border="2px solid gray"
                      p={2}
                    />
                  </Box>
                  <Box gridColumn="span 2" mt={10}>
                    <label htmlFor="employer3-to">To Date:</label>
                    <Input
                      {...register("expemployerend3")}
                      bg="white"
                      id="employer3-to"
                      placeholder="Type here"
                      _focus={{
                        borderColor: "gray.900",
                        outline: "2px solid blue.900",
                        outlineOffset: "1px",
                      }}
                      border="2px solid gray"
                      p={2}
                    />
                  </Box>
                  <Box gridColumn="span 2">
                    <label htmlFor="employer3-phone">Work Phone Number:</label>
                    <Input
                      {...register("expemployerwork3")}
                      bg="white"
                      id="employer3-phone"
                      placeholder="Type here"
                      _focus={{
                        borderColor: "gray.900",
                        outline: "2px solid blue.900",
                        outlineOffset: "1px",
                      }}
                      border="2px solid gray"
                      p={2}
                    />
                  </Box>
                  <Box gridColumn="span 2">
                    <label htmlFor="employer3-superior">
                      Immediate Superior Contact #:
                    </label>
                    <Input
                      {...register("expemployersupContact3")}
                      bg="white"
                      id="employer3-superior"
                      placeholder="Type here"
                      _focus={{
                        borderColor: "gray.900",
                        outline: "2px solid blue.900",
                        outlineOffset: "1px",
                      }}
                      border="2px solid gray"
                      p={2}
                    />
                  </Box>
                  <Box gridColumn="span 4">
                    <label htmlFor="employer3-function">
                      Job Function & Responsibilities
                    </label>
                    <Input
                      {...register("expemployerjobfunc3")}
                      bg="white"
                      id="employer3-function"
                      placeholder="Type here"
                      _focus={{
                        borderColor: "gray.900",
                        outline: "2px solid blue.900",
                        outlineOffset: "1px",
                      }}
                      border="2px solid gray"
                      p={2}
                    />
                  </Box>
                  <Box gridColumn="span 3">
                    <label htmlFor="employer3-reason">
                      Reason for Leaving:
                    </label>
                    <Input
                      {...register("whyleave3")}
                      bg="white"
                      id="employer3-reason"
                      placeholder="Type here"
                      _focus={{
                        borderColor: "gray.900",
                        outline: "2px solid blue.900",
                        outlineOffset: "1px",
                      }}
                      border="2px solid gray"
                      p={2}
                    />
                  </Box>
                </Grid>
              </Box>
            </Box>
          )}
          {/* Employment Info end */}

          {/* Training & Seminar/Course */}
          {currentTab === "training/course" && (
            <Box
              as="fieldset"
              borderWidth="1px"
              borderRadius="md"
              p={5}
              borderColor="gray.200"
            >
              <legend className="font-medium text-lg mb-4">
                TRAINING & SEMINAR/COURSE ATTENDED
              </legend>
              <Grid templateColumns="repeat(4, 1fr)" gap={3}>
                <Box gridColumn={{ base: "span 2", md: "span 4" }}>
                  <label htmlFor="training-course-name">
                    Title of Seminar/Course:
                  </label>
                  <Box
                    maxWidth="100%"
                    width="100%"
                    p={6}
                    bg="gray.50"
                    boxShadow="md"
                    borderRadius="lg"
                    border="3px solid gray"
                  >
                    <Stack direction="row" h="50" gap="4">
                      <Box gridColumn={{ base: "span 2", md: "span 3" }}>
                        <label htmlFor="seminar-names">Seminars:</label>
                        <Input
                          {...register("sem1")}
                          bg="white"
                          id="seminar1"
                          placeholder="1"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          {...register("sem2")}
                          bg="white"
                          id="seminar2"
                          placeholder="2"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          {...register("sem3")}
                          bg="white"
                          id="seminar3"
                          placeholder="3"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          {...register("sem4")}
                          bg="white"
                          id="seminar4"
                          placeholder="4"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          {...register("sem5")}
                          bg="white"
                          id="seminar5"
                          placeholder="5"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                      </Box>
                      <Box gridColumn={{ base: "span 2", md: "span 2" }}>
                        <label htmlFor="seminar-address">Place/Address</label>
                        <Input
                          {...register("semplace1")}
                          bg="white"
                          id="seminar-address1"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          {...register("semplace2")}
                          bg="white"
                          id="seminar-address2"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          {...register("semplace3")}
                          bg="white"
                          id="seminar-address3"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          {...register("semplace4")}
                          bg="white"
                          id="seminar-address4"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          {...register("semplace5")}
                          bg="white"
                          id="seminar-address5"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                      </Box>
                      <Box gridColumn={{ base: "span 1", md: "span 1" }}>
                        <label htmlFor="seminar-from">From</label>
                        <Input
                          {...register("semfrom1")}
                          bg="white"
                          id="childage1"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          {...register("semfrom2")}
                          bg="white"
                          id="childage2"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          {...register("semfrom3")}
                          bg="white"
                          id="childage3"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          {...register("semfrom4")}
                          bg="white"
                          id="childage4"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          {...register("semfrom5")}
                          bg="white"
                          id="childage5"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                      </Box>
                      <Box gridColumn={{ base: "span 1", md: "span 1" }}>
                        <label htmlFor="child-age">To</label>
                        <Input
                          {...register("semto1")}
                          bg="white"
                          id="childage1"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          {...register("semto2")}
                          bg="white"
                          id="childage2"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          {...register("semto3")}
                          bg="white"
                          id="childage3"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          {...register("semto4")}
                          bg="white"
                          id="childage4"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          {...register("semto5")}
                          bg="white"
                          id="childage5"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                      </Box>
                    </Stack>
                  </Box>
                </Box>
              </Grid>
            </Box>
          )}
          {/* Training & Seminar/end */}
          {/* organizations */}
          {currentTab === "organizations" && (
            <Box
              as="fieldset"
              borderWidth="1px"
              borderRadius="md"
              p={5}
              borderColor="gray.200"
            >
              <legend className="font-medium text-lg mb-4">
                ORGANIZATIONS/ASSOCIATIONS/FRATERNITIES YOU HAVE JOINED
              </legend>
              <Grid templateColumns="repeat(4, 1fr)" gap={3}>
                <Box gridColumn={{ base: "span 2", md: "span 4" }}>
                  <label htmlFor="children-names">
                    Name of Organizations/Associations/Fraternities:
                  </label>
                  <Box
                    maxWidth="100%"
                    width="100%"
                    p={6}
                    bg="gray.50"
                    boxShadow="md"
                    borderRadius="lg"
                    border="3px solid gray"
                  >
                    <Stack direction="row" h="50" gap="4">
                      <Box gridColumn={{ base: "span 2", md: "span 3" }}>
                        <label htmlFor="organizations-names">
                          Organizations:
                        </label>
                        <Input
                          {...register("org1")}
                          bg="white"
                          id="organizations1"
                          placeholder="1"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          {...register("org2")}
                          bg="white"
                          id="organizations2"
                          placeholder="2"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          {...register("org3")}
                          bg="white"
                          id="organizations3"
                          placeholder="3"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          {...register("org4")}
                          bg="white"
                          id="organizations4"
                          placeholder="4"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          {...register("org5")}
                          bg="white"
                          id="organizations5"
                          placeholder="5"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                      </Box>
                      <Box gridColumn={{ base: "span 2", md: "span 2" }}>
                        <label htmlFor="seminar-address">Place/Address</label>
                        <Input
                          {...register("orgplace1")}
                          bg="white"
                          id="seminar-address1"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          {...register("orgplace2")}
                          bg="white"
                          id="seminar-address2"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          {...register("orgplace3")}
                          bg="white"
                          id="seminar-address3"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          {...register("orgplace4")}
                          bg="white"
                          id="seminar-address4"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          {...register("orgplace5")}
                          bg="white"
                          id="seminar-address5"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                      </Box>
                      <Box gridColumn={{ base: "span 1", md: "span 1" }}>
                        <label htmlFor="seminar-from">From</label>
                        <Input
                          {...register("orgfrom1")}
                          bg="white"
                          id="seminar-from1"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          {...register("orgfrom2")}
                          bg="white"
                          id="seminar-from2"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          {...register("orgfrom3")}
                          bg="white"
                          id="seminar-from3"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          {...register("orgfrom4")}
                          bg="white"
                          id="seminar-from4"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          {...register("orgfrom5")}
                          bg="white"
                          id="seminar-from5"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                      </Box>
                      <Box gridColumn={{ base: "span 1", md: "span 1" }}>
                        <label htmlFor="seminar-to">To</label>
                        <Input
                          {...register("orgto1")}
                          bg="white"
                          id="seminar-to1"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          {...register("orgto2")}
                          bg="white"
                          id="seminar-to2"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          {...register("orgto3")}
                          bg="white"
                          id="seminar-to3"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          {...register("orgto4")}
                          bg="white"
                          id="seminar-to4"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          {...register("orgto5")}
                          bg="white"
                          id="seminar-to5"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                      </Box>
                    </Stack>
                  </Box>
                </Box>
              </Grid>
            </Box>
          )}
          {/* organizations-end */}

          {/* references */}
          {currentTab === "references" && (
            <Box
              as="fieldset"
              borderWidth="1px"
              borderRadius="md"
              p={5}
              borderColor="gray.200"
            >
              {/* referral 1 */}
              <Box mb={6}>
                <legend className="font-medium text-lg mb-2">
                  Reference 1
                </legend>

                <Box
                  maxWidth="100%"
                  width="100%"
                  p={6}
                  bg="gray.50"
                  boxShadow="md"
                  borderRadius="lg"
                >
                  <Grid templateColumns="repeat(4, 1fr)" gap={4}>
                    <Box gridColumn="span 2">
                      <label htmlFor="referral1">Name:</label>
                      <Input
                        {...register("refername1")}
                        bg="white"
                        id="referral1"
                        placeholder="Type here"
                        _focus={{
                          borderColor: "gray.900",
                          outline: "2px solid blue.900",
                          outlineOffset: "1px",
                        }}
                        border="2px solid gray"
                        p={2}
                      />
                    </Box>

                    <Box gridColumn="span 2">
                      <label htmlFor="referral1-address">Address</label>
                      <Input
                        {...register("referadd1")}
                        bg="white"
                        id="referral1-address"
                        placeholder="Type here"
                        _focus={{
                          borderColor: "gray.900",
                          outline: "2px solid blue.900",
                          outlineOffset: "1px",
                        }}
                        border="2px solid gray"
                        p={2}
                      />
                    </Box>

                    <Box gridColumn="span 1">
                      <label htmlFor="referral1-cell">Cellphone #:</label>
                      <Input
                        {...register("refercell1")}
                        bg="white"
                        id="referral1-cell"
                        placeholder="Type here"
                        _focus={{
                          borderColor: "gray.900",
                          outline: "2px solid blue.900",
                          outlineOffset: "1px",
                        }}
                        border="2px solid gray"
                        p={2}
                      />
                    </Box>
                    <Box gridColumn="span 1">
                      <label htmlFor="referral1-landline">Landline #:</label>
                      <Input
                        {...register("referland1")}
                        bg="white"
                        id="referral1-landline"
                        placeholder="Type here"
                        _focus={{
                          borderColor: "gray.900",
                          outline: "2px solid blue.900",
                          outlineOffset: "1px",
                        }}
                        border="2px solid gray"
                        p={2}
                      />
                    </Box>

                    <Box gridColumn="span 2">
                      <label htmlFor="referral1-relationship">
                        Relationship to Applicant
                      </label>
                      <Input
                        {...register("referrel1")}
                        bg="white"
                        id="referral1-relationship"
                        placeholder="Type here"
                        _focus={{
                          borderColor: "gray.900",
                          outline: "2px solid blue.900",
                          outlineOffset: "1px",
                        }}
                        border="2px solid gray"
                        p={2}
                      />
                    </Box>
                    <Box gridColumn="span 2">
                      <label htmlFor="referral1-occupation">Occupation</label>
                      <Input
                        {...register("referoccu1")}
                        bg="white"
                        id="referral1-occupation"
                        placeholder="Type here"
                        _focus={{
                          borderColor: "gray.900",
                          outline: "2px solid blue.900",
                          outlineOffset: "1px",
                        }}
                        border="2px solid gray"
                        p={2}
                      />
                    </Box>
                  </Grid>
                </Box>
              </Box>
              {/* Referral 2 */}
              <Box mb={6}>
                <legend className="font-medium text-lg mb-2">Referral 2</legend>

                <Box
                  maxWidth="100%"
                  width="100%"
                  p={6}
                  bg="gray.50"
                  boxShadow="md"
                  borderRadius="lg"
                >
                  <Grid templateColumns="repeat(4, 1fr)" gap={4}>
                    <Box gridColumn="span 2">
                      <label htmlFor="referral2">Name:</label>
                      <Input
                        {...register("refername2")}
                        bg="white"
                        id="referral2"
                        placeholder="Type here"
                        _focus={{
                          borderColor: "gray.900",
                          outline: "2px solid blue.900",
                          outlineOffset: "1px",
                        }}
                        border="2px solid gray"
                        p={2}
                      />
                    </Box>

                    <Box gridColumn="span 2">
                      <label htmlFor="referral2-address">Address</label>
                      <Input
                        {...register("referadd2")}
                        bg="white"
                        id="referral2-address"
                        placeholder="Type here"
                        _focus={{
                          borderColor: "gray.900",
                          outline: "2px solid blue.900",
                          outlineOffset: "1px",
                        }}
                        border="2px solid gray"
                        p={2}
                      />
                    </Box>

                    <Box gridColumn="span 1">
                      <label htmlFor="referral2-cell">Cellphone #:</label>
                      <Input
                        {...register("refercell2")}
                        bg="white"
                        id="referral2-cell"
                        placeholder="Type here"
                        _focus={{
                          borderColor: "gray.900",
                          outline: "2px solid blue.900",
                          outlineOffset: "1px",
                        }}
                        border="2px solid gray"
                        p={2}
                      />
                    </Box>
                    <Box gridColumn="span 1">
                      <label htmlFor="referral2-landline">Landline #:</label>
                      <Input
                        {...register("referland2")}
                        bg="white"
                        id="referral2-landline"
                        placeholder="Type here"
                        _focus={{
                          borderColor: "gray.900",
                          outline: "2px solid blue.900",
                          outlineOffset: "1px",
                        }}
                        border="2px solid gray"
                        p={2}
                      />
                    </Box>

                    <Box gridColumn="span 2">
                      <label htmlFor="referral2-relationship">
                        Relationship to Applicant
                      </label>
                      <Input
                        {...register("referrel2")}
                        bg="white"
                        id="referral2-relationship"
                        placeholder="Type here"
                        _focus={{
                          borderColor: "gray.900",
                          outline: "2px solid blue.900",
                          outlineOffset: "1px",
                        }}
                        border="2px solid gray"
                        p={2}
                      />
                    </Box>
                    <Box gridColumn="span 2">
                      <label htmlFor="referral2-occupation">Occupation</label>
                      <Input
                        {...register("referoccu2")}
                        bg="white"
                        id="referral2-occupation"
                        placeholder="Type here"
                        _focus={{
                          borderColor: "gray.900",
                          outline: "2px solid blue.900",
                          outlineOffset: "1px",
                        }}
                        border="2px solid gray"
                        p={2}
                      />
                    </Box>
                  </Grid>
                </Box>
              </Box>
              {/* Referral 3 */}
              <Box mb={6}>
                <legend className="font-medium text-lg mb-2">Referral 3</legend>

                <Box
                  maxWidth="100%"
                  width="100%"
                  p={6}
                  bg="gray.50"
                  boxShadow="md"
                  borderRadius="lg"
                >
                  <Grid templateColumns="repeat(4, 1fr)" gap={4}>
                    <Box gridColumn="span 2">
                      <label htmlFor="referral3">Name:</label>
                      <Input
                        {...register("refername3")}
                        bg="white"
                        id="referral3"
                        placeholder="Type here"
                        _focus={{
                          borderColor: "gray.900",
                          outline: "2px solid blue.900",
                          outlineOffset: "1px",
                        }}
                        border="2px solid gray"
                        p={2}
                      />
                    </Box>

                    <Box gridColumn="span 2">
                      <label htmlFor="referral3-address">Address</label>
                      <Input
                        {...register("referadd3")}
                        bg="white"
                        id="referral3-address"
                        placeholder="Type here"
                        _focus={{
                          borderColor: "gray.900",
                          outline: "2px solid blue.900",
                          outlineOffset: "1px",
                        }}
                        border="2px solid gray"
                        p={2}
                      />
                    </Box>

                    <Box gridColumn="span 1">
                      <label htmlFor="referral3-cell">Cellphone #:</label>
                      <Input
                        {...register("refercell3")}
                        bg="white"
                        id="referral3-cell"
                        placeholder="Type here"
                        _focus={{
                          borderColor: "gray.900",
                          outline: "2px solid blue.900",
                          outlineOffset: "1px",
                        }}
                        border="2px solid gray"
                        p={2}
                      />
                    </Box>
                    <Box gridColumn="span 1">
                      <label htmlFor="referral3-landline">Landline #:</label>
                      <Input
                        {...register("referland3")}
                        bg="white"
                        id="referral3-landline"
                        placeholder="Type here"
                        _focus={{
                          borderColor: "gray.900",
                          outline: "2px solid blue.900",
                          outlineOffset: "1px",
                        }}
                        border="2px solid gray"
                        p={2}
                      />
                    </Box>

                    <Box gridColumn="span 2">
                      <label htmlFor="referral3-relationship">
                        Relationship to Applicant
                      </label>
                      <Input
                        {...register("referrel3")}
                        bg="white"
                        id="referral3-relationship"
                        placeholder="Type here"
                        _focus={{
                          borderColor: "gray.900",
                          outline: "2px solid blue.900",
                          outlineOffset: "1px",
                        }}
                        border="2px solid gray"
                        p={2}
                      />
                    </Box>
                    <Box gridColumn="span 2">
                      <label htmlFor="referral3-occupation">Occupation</label>
                      <Input
                        {...register("referoccu3")}
                        bg="white"
                        id="referral3-occupation"
                        placeholder="Type here"
                        _focus={{
                          borderColor: "gray.900",
                          outline: "2px solid blue.900",
                          outlineOffset: "1px",
                        }}
                        border="2px solid gray"
                        p={2}
                      />
                    </Box>
                  </Grid>
                </Box>
              </Box>
            </Box>
          )}
          {/* references-end */}
          {/* location */}
          {currentTab === "location" && (
            <Box
              as="fieldset"
              borderWidth="1px"
              borderRadius="md"
              p={5}
              borderColor="gray.200"
            >
              <legend className="font-medium text-lg mb-4">
                Location of your house (Maps)
              </legend>
              <AspectRatio ratio={21 / 9}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3865.7759069004946!2d121.06321238031265!3d14.324445450366555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d766022cfe23%3A0x3af2baafc5abe94c!2sReliance%20Producers%20Cooperative!5e0!3m2!1sen!2sng!4v1732463432909!5m2!1sen!2sng" />
              </AspectRatio>
              <Box
                as="fieldset"
                borderWidth="1px"
                borderRadius="md"
                p={5}
                borderColor="gray.200"
                mt={8}
              >
                <legend className="font-medium text-lg mb-4">
                  Relative Reference
                </legend>
                <Grid templateColumns="repeat(4, 1fr)" gap={3}>
                  <Box gridColumn={{ base: "span 2", md: "span 4" }}>
                    <Box
                      maxWidth="100%"
                      width="100%"
                      p={6}
                      bg="gray.50"
                      boxShadow="md"
                      borderRadius="lg"
                    >
                      <Stack direction="row" h="50" gap="4">
                        <Box gridColumn={{ base: "span 2", md: "span 3" }}>
                          <label htmlFor="referral-relative-name">Name</label>
                          <Input
                            {...register("Referencename1", {
                              required: "Reference name is required",
                            })}
                            bg="white"
                            id="referral-relative-name1"
                            placeholder="Type here"
                            _focus={{
                              borderColor: "gray.900",
                              outline: "2px solid blue.900",
                              outlineOffset: "1px",
                            }}
                            border="2px solid gray"
                            p={2}
                            mb={2}
                          />
                          {errors.Referencename1 && (
                            <p className="text-sm text-red-300">
                              {errors.Referencename1.message}
                            </p>
                          )}
                          <Input
                            {...register("Referencename2", {
                              required: "Reference name is required",
                            })}
                            bg="white"
                            id="referral-relative-name2"
                            placeholder="Type here"
                            _focus={{
                              borderColor: "gray.900",
                              outline: "2px solid blue.900",
                              outlineOffset: "1px",
                            }}
                            border="2px solid gray"
                            p={2}
                            mb={2}
                          />
                          {errors.Referencename2 && (
                            <p className="text-sm text-red-300">
                              {errors.Referencename2.message}
                            </p>
                          )}
                          <Input
                            {...register("Referencename3", {
                              required: "Reference name is required",
                            })}
                            bg="white"
                            id="referral-relative-name3"
                            placeholder="Type here"
                            _focus={{
                              borderColor: "gray.900",
                              outline: "2px solid blue.900",
                              outlineOffset: "1px",
                            }}
                            border="2px solid gray"
                            p={2}
                            mb={2}
                          />
                          {errors.Referencename3 && (
                            <p className="text-sm text-red-300">
                              {errors.Referencename3.message}
                            </p>
                          )}
                        </Box>
                        <Box gridColumn={{ base: "span 2", md: "span 2" }}>
                          <label htmlFor="referral-relative-address">
                            Address
                          </label>
                          <Input
                            {...register("Referenceadd1", {
                              required: "Reference name is required",
                            })}
                            bg="white"
                            id="referral-relative-address1"
                            placeholder="Type here"
                            _focus={{
                              borderColor: "gray.900",
                              outline: "2px solid blue.900",
                              outlineOffset: "1px",
                            }}
                            border="2px solid gray"
                            p={2}
                            mb={2}
                          />
                          {errors.Referenceadd1 && (
                            <p className="text-sm text-red-300">
                              {errors.Referenceadd1.message}
                            </p>
                          )}
                          <Input
                            {...register("Referenceadd2", {
                              required: "Reference address is required",
                            })}
                            bg="white"
                            id="referral-relative-address2"
                            placeholder="Type here"
                            _focus={{
                              borderColor: "gray.900",
                              outline: "2px solid blue.900",
                              outlineOffset: "1px",
                            }}
                            border="2px solid gray"
                            p={2}
                            mb={2}
                          />
                          {errors.Referenceadd2 && (
                            <p className="text-sm text-red-300">
                              {errors.Referenceadd2.message}
                            </p>
                          )}
                          <Input
                            {...register("Referenceadd3", {
                              required: "Reference address is required",
                            })}
                            bg="white"
                            id="referral-relative-address3"
                            placeholder="Type here"
                            _focus={{
                              borderColor: "gray.900",
                              outline: "2px solid blue.900",
                              outlineOffset: "1px",
                            }}
                            border="2px solid gray"
                            p={2}
                            mb={2}
                          />
                          {errors.Referenceadd3 && (
                            <p className="text-sm text-red-300">
                              {errors.Referenceadd3.message}
                            </p>
                          )}
                        </Box>
                        <Box gridColumn={{ base: "span 1", md: "span 1" }}>
                          <label htmlFor="referral-relative-contact">
                            Occupation
                          </label>
                          <Input
                            {...register("Referenceoccu1", {
                              required: "Reference address is required",
                            })}
                            bg="white"
                            id="referral-relative-contact1"
                            placeholder="Type here"
                            _focus={{
                              borderColor: "gray.900",
                              outline: "2px solid blue.900",
                              outlineOffset: "1px",
                            }}
                            border="2px solid gray"
                            p={2}
                            mb={2}
                          />
                          {errors.Referenceoccu1 && (
                            <p className="text-sm text-red-300">
                              {errors.Referenceoccu1.message}
                            </p>
                          )}
                          <Input
                            {...register("Referenceocc2", {
                              required: "Reference address is required",
                            })}
                            bg="white"
                            id="referral-relative-contact2"
                            placeholder="Type here"
                            _focus={{
                              borderColor: "gray.900",
                              outline: "2px solid blue.900",
                              outlineOffset: "1px",
                            }}
                            border="2px solid gray"
                            p={2}
                            mb={2}
                          />
                          {errors.Referenceocc2 && (
                            <p className="text-sm text-red-300">
                              {errors.Referenceocc2.message}
                            </p>
                          )}
                          <Input
                            {...register("Referenceocc3", {
                              required: "Reference address is required",
                            })}
                            bg="white"
                            id="referral-relative-contact3"
                            placeholder="Type here"
                            _focus={{
                              borderColor: "gray.900",
                              outline: "2px solid blue.900",
                              outlineOffset: "1px",
                            }}
                            border="2px solid gray"
                            p={2}
                            mb={2}
                          />
                          {errors.Referenceocc3 && (
                            <p className="text-sm text-red-300">
                              {errors.Referenceocc3.message}
                            </p>
                          )}
                        </Box>
                      </Stack>
                    </Box>
                  </Box>
                </Grid>
              </Box>
            </Box>
          )}
          {/* location-end */}
          {/* Form Buttons */}
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mt={6}
          >
            <Button
              size="md"
              variant="outline"
              colorScheme="blue"
              onClick={handleBack}
              isDisabled={tabOrder.indexOf(currentTab) === 0}
            >
              Back
            </Button>
            <Button
              p="6"
              colorScheme="none"
              bg="#0B1E33"
              color="white"
              overflow="hidden"
              onClick={handleNext}
              isDisabled={tabOrder.indexOf(currentTab) === tabOrder.length - 1}
            >
              Next
            </Button>
          </Box>
        </Box>
      </GridItem>
    </Grid>
  );
};

export default Form;
