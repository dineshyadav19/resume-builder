import { Image, Link, Page, StyleSheet, Text, View } from '@react-pdf/renderer';
import ProfileImage from './assets/my-image.jpg';
import email from './assets/email.png';
import github from './assets/github.png';
import home from './assets/home.png';
import linkedin from './assets/linkedin.png';
import phone from './assets/phone.png';
import web from './assets/web.png';

const colors = {
  green: '#34969b',
  navy: '#212933',
  blue: '#30394e',
  white: '#fff',
  black: '#000',
};

const Resume = () => {
  const SocialLink = ({
    imageSrc,
    path,
    text,
  }: {
    imageSrc: string;
    path: string;
    text: string;
  }) => {
    return (
      <li style={styles.socialLink}>
        <Image src={imageSrc} style={styles.socialLinkImage} />
        <Link src={path} style={styles.socialLinkText}>
          {text}
        </Link>
      </li>
    );
  };

  const MainSubSection = ({
    sectionHeading,
    title,
    time,
    workedAt,
    achievements,
  }: {
    sectionHeading?: string;
    title: string;
    time: string;
    workedAt: string;
    achievements: Array<string>;
  }) => {
    return (
      <>
        {sectionHeading && (
          <Text style={styles.subSectionTitle}>{sectionHeading}</Text>
        )}
        <Text
          style={{ fontSize: 18, fontWeight: 'extrabold', marginBottom: 5 }}
        >
          {title}
        </Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: 'medium', marginBottom: 5 }}>
            {workedAt}
          </Text>
          <Text style={{ fontSize: 12, color: colors.green, marginBottom: 10 }}>
            {time}
          </Text>
        </View>
        <Text
          style={{
            fontSize: 12,
            color: colors.green,
            textDecoration: 'underline',
            marginBottom: 5,
          }}
        >
          Achievements
        </Text>
        <View style={{ marginLeft: 10, marginBottom: 10 }}>
          {achievements.map((val, index) => (
            <Text style={{ fontSize: 12, marginBottom: 5 }} key={index}>
              {val}
            </Text>
          ))}
        </View>
      </>
    );
  };

  return (
    <Page size={[650, 'auto']} style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <Text style={styles.name}>Dinesh Yadav</Text>
          <Text style={styles.profession}>Front-end Engineer</Text>
          <Text style={styles.objective}>
            Enthusiastic Engineer with 2 years of knowledge in JavaScript, Code
            Architecture, and Modern Front- end Technologies. Seeking a
            challenging front-end developer position to utilize my skills and
            experience in building complex web and mobile applications.
          </Text>
        </View>
        <View style={styles.profileImageContainer}>
          <Image src={ProfileImage} style={styles.profileImage} />
        </View>
      </View>

      {/* Sub header */}
      <View style={styles.subHeaderContainer}>
        <View style={styles.equalCol}>
          <ul>
            <SocialLink
              imageSrc={email}
              path="mailto:dinesh.2108.yadav@gmail.com"
              text="dinesh.2108.yadav@gmail.com"
            />
            <SocialLink
              imageSrc={phone}
              path="tel:+918447824248"
              text="+91 8447824248"
            />
            <SocialLink imageSrc={home} path="/" text="New Delhi, India" />
          </ul>
        </View>
        <View style={styles.equalCol}>
          <ul>
            <SocialLink
              imageSrc={github}
              path="https://www.github.com/dineshyadav19"
              text="dineshyadav19"
            />
            <SocialLink
              imageSrc={web}
              path="http://www.thewebengineer.dev"
              text="thewebengineer"
            />
            <SocialLink
              imageSrc={linkedin}
              path="https://www.linkedin.com/in/dinesh-yadav-web/"
              text="dinesh-yadav"
            />
          </ul>
        </View>
      </View>

      {/* Main section */}
      <View style={styles.main}>
        {/* First column */}
        <View style={styles.mainLeft}>
          <MainSubSection
            sectionHeading="Education"
            title="B.tech in Electronics and Communication"
            time="Aug,2017 - July,2021"
            workedAt="The NorthCap University"
            achievements={['CGPA - 7.5/10.00']}
          />
          <MainSubSection
            sectionHeading="Professional Experience"
            title="Software Engineer"
            time="April, 2022 - Present"
            workedAt="Fenice Energy (Earlier SunEdison)"
            achievements={[
              "Architected and implemented the entire user interface of the Web-based product, helping the team to manage operations with ease and boosting the team's performance signiﬁcantly.",
              'Coded robust, modular, scalable, and maintainable code base on Reactjs, AntDesign, and Typescript from scratch.',
              'Spearheaded and put processes in place for smoother development ﬂow right from prototyping to the ﬁnal delivery of the product.',
              'The system is used by a team of 30+ and handles over 500+ tickets per day.',
            ]}
          />
          <MainSubSection
            title="Front-end Engineer"
            time="Nov,2021 - March,2022"
            workedAt="Reqip"
            achievements={[
              'Collaborated closely with cross-functional teams and provided critical input on software architecture and design, contributing to the success of the software development team in delivering high-quality products.',
              "Architected and implemented the entire user interface of the Web-based product, helping the team to manage operations with ease and boosting the team's performance signiﬁcantly.",
              "Implemented several new features, including automating payments and generating and previewing reports using React PDF on the client-side, which signiﬁcantly improved the internal team's eﬃciency",
            ]}
          />
          <MainSubSection
            title="Full-Stack Web Developer Intern"
            time="May,2020 - July,2020"
            workedAt="Yamm Labs"
            achievements={[
              'Developed and deployed a full-ﬂedged website using WordPress, Mailchimp, e-commerce store, and other front-end tools as an intern',
              'Translated user requirements into project designs and implementation plans, working collaboratively with the project team to meet project goals on time and on budget',
            ]}
          />
        </View>
        {/* Second column */}
        <View style={{ width: '40%', paddingLeft: 10 }}></View>
      </View>
    </Page>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 0.8,
    display: 'flex',
    flexDirection: 'column',
  },
  name: {
    marginBottom: 2,
    fontWeight: 'bold',
    fontSize: 28,
  },
  profession: {
    marginBottom: 6,
    fontWeight: 'normal',
    fontSize: 20,
    color: colors.green,
  },
  objective: {
    marginBottom: 2,
    fontWeight: 'normal',
    fontSize: 13,
  },
  equalCol: {
    display: 'flex',
    flex: 0.5,
  },
  subHeaderContainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderBottomColor: colors.green,
    borderBottomStyle: 'solid',
    borderBottomWidth: 4,
    backgroundColor: '#e7decc',
  },
  main: {
    flexDirection: 'row',
    color: colors.black,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  subSectionTitle: {
    fontSize: 20,
    fontWeight: 'ultrabold',
    color: colors.green,
    marginBottom: 5,
    maxWidth: 'auto',
    borderBottomWidth: 2,
    borderBottomColor: colors.green,
    borderBottomStyle: 'dashed',
  },
  mainLeft: {
    width: '60%',
    paddingRight: 10,
    borderRightColor: colors.green,
    borderRightWidth: 2,
    borderRightStyle: 'solid',
  },
  container: {
    width: '100%',
    display: 'flex',
    color: colors.white,
  },
  headerContainer: {
    display: 'flex',
    paddingHorizontal: 20,
    paddingVertical: 20,
    flexDirection: 'row',
    backgroundColor: colors.blue,
  },
  profileImage: {
    height: 112,
    width: 112,
    borderRadius: '100%',
    marginLeft: 10,
  },
  profileImageContainer: {
    flex: 0.2,
    display: 'flex',
  },
  socialLink: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  socialLinkImage: {
    marginRight: 6,
    height: 16,
    width: 16,
  },
  socialLinkText: {
    fontSize: 12,
    color: colors.black,
    textDecoration: 'none',
  },
});

export default Resume;
