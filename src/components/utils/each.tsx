import { Children } from "react";

type PropTypes = {
    render: (item: any, index: number) => React.ReactNode;
    of: any[];
}

export const Each = ({render, of} : PropTypes) => {
    return <>{Children.toArray(of.map((item, index) => render(item, index)))}</>;
}