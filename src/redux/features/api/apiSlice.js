import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        // baseUrl: 'https://travel-server-woad.vercel.app'
        baseUrl: 'http://localhost:5000'
    }),
    tagTypes: ["TourPackages", "Blogs", "Destinations"],
    endpoints: (builder) => ({
        getTourPackages: builder.query({
            query: () => "/tourPackages",
            providesTags: ["TourPackages"]
        }),
        getDestinations: builder.query({
            query: () => "/destinations",
            providesTags: ["Destinations"],
        }),
        getDestination: builder.query({
            query: (id) => `/destination/${ id }`,
            providesTags: ["singleDestination"],
        }),
        getBlogs: builder.query({
            query: () => "/blogs",
            providesTags: ["Blogs"]
        })
    })
});

export const {
    useGetTourPackagesQuery,
    useGetDestinationsQuery,
    useGetDestinationQuery,
    useGetBlogsQuery,
} = apiSlice;

/*
https://travel-server-woad.vercel.app/packages
http://localhost:5000/tourPackages

*/
