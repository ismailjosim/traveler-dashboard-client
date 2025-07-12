import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		// baseUrl: 'https://travel-server-woad.vercel.app',
		baseUrl: 'http://localhost:5000',
	}),
	tagTypes: ['TourPackages', 'Blogs', 'Destinations', 'singleDestination'],
	endpoints: (builder) => ({
		getTourPackages: builder.query({
			query: () => '/tourPackages',
			providesTags: ['TourPackages'],
		}),
		getDestinations: builder.query({
			query: () => '/destinations',
			providesTags: ['Destinations'],
		}),
		getSingleDestination: builder.query({
			query: (id) => `/destinations/${id}`,
			providesTags: ['singleDestination'],
		}),
		// update data using patch request
		updateDestination: builder.mutation({
			query: ({ id, data }) => ({
				url: `/destination/${id}`,
				method: 'PATCH',
				body: data,
			}),
			invalidatesTags: ['Destinations', 'singleDestination'],
		}),
		getBlogs: builder.query({
			query: () => '/blogs',
			providesTags: ['Blogs'],
		}),
	}),
})

export const {
	useGetTourPackagesQuery,
	useGetDestinationsQuery,
	useGetSingleDestinationQuery,
	useGetBlogsQuery,
	useUpdateDestinationMutation,
} = apiSlice

/*
https://travel-server-woad.vercel.app/packages
http://localhost:5000/tourPackages

*/
