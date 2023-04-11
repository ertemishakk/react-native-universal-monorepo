import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// const initialState = null as null | Post[];

const initialState = [{
    id:1,
    title: 'Apple iMac Pro',
    description: 'Test',
    price: '1500',
    image:'',
    negotiable: true,
    location: 'Sydenham',
    postedBy: {
        name: 'Ishak Ertem',
        profilePhoto: '',
        phoneNumber: '0476574771'
    }
},
    {
        id: 2,
        title: '2018 Toyota Landcruiser Gxl (4x4) 6 Sp Automatic 4d Wagon',
        description: `2018 Landcruiser GXL Wagon, Pearl White, 4.5lt Turbo Diesel, 8 seater. Tow bar, bull bar, light bar, Redarc electric braking system fitted(brand new never used)
4 brand new Toyo open country tyres. Well looked after & maintained. Only 1 owner. Low kms.
RWC & 6 mths rego
Sale Price GST`,
        price: '92,000',
        image: '',
        negotiable: true,
        location: 'Sydenham',
        postedBy: {
            name: 'Lisa',
            profilePhoto: '',
            phoneNumber: '0476574771'
        }
    }] 

const slice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPosts(state, action: PayloadAction<Post[]>) {
            return action.payload;
        },
    },
});

export const { setPosts } = slice.actions;

export default slice.reducer;