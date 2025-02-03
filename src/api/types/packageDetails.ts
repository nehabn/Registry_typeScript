export interface PackageDetails {
  name: string;
  description: string;
  readme: string;
  authors: {
    email: string;
    name: string;
  }
  maintainers: {
    email: string;
    name: string;
  }[];
  license: string;
}