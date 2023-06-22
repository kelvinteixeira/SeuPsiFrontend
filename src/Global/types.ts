export type ProfessionalProps = {
  id: number;
  name: string;
  profilePicture: string;
  profession: string;
  CRP?: string;
  city: string;
  state: string;
  avaliation: number;
  languages: string[];
  skills: string[];
  price: number;
  description: string;
  socialMedias: {
    instagram: string;
    linkedIn: string;
    email: string;
  };
};

export type CustomerProps = {
  id: number;
  userName: string;
  socialName: string;
  proilePicture: string;
  gender: string;
  CPF: string;
  email: string;
  birthdayDate: string;
  city: string;
  state: string;
  country: string;
  plan: string;
  schedules: SchedulesProps[];
};

type SchedulesProps = {
  id: number;
  date: string;
  professional: string;
  type: string;
  situation: string;
};

export type PlansProps = {
  id: number;
  title: string;
  benefits: string[];
  buttonTitle: string;
  headerTapeColor: string;
  price: string;
};
