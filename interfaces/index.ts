export interface ISlice {
    variation: string;
    slice_type: string;
    slice_label: string;
    primary: any
}

export interface IResultData {
    slices: ISlice[]
}

export interface IResult {
    slice: ISlice[];
    id: string;
    uid: string;
    type: string;
    first_publication_date: string;
    slugs: Array<any>;
    data: any;
}

export interface HomeProps {
    results: IResult[]
}
