export interface Business {
    id: string;
    name: string;
    location: {
      address1: string;
      city: string;
      zip_code: string;
      country: string;
      state: string;
    };
    rating: number;
    phone: string;
    image_url: string;
    price: string;
  }