import ReactDOM from 'react-dom';
import React, {useState, useEffect} from 'react';
import DataTable from './../DataTable';
import { fireEvent, render } from '@testing-library/react';

//test case 1
it("renders without crashing", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<DataTable />,div);
})

/*describe("Input value",()=>{
    it("updates on change",()=>{
        const {queryByPlaceholderText} = render(<DataTable />);
        const searchInput = queryByPlaceholderText('Search');

        fireEvent.change(searchInput, {target:{value:"test"}});

        expect(searchInput.value).toBe("test");
    })
});*/