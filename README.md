# react-ts-data-grid

The `react-ts-data-grid` component is a custom React component designed to render tabular data in a structured and visually appealing manner. It takes a 2D array of strings as a prop, where the first row of the array is treated as the header of the table, and the remaining rows represent the data to be displayed.

Here's a breakdown of the key features of the Table component:

1. Dynamic Table Structure: The component dynamically generates the structure of the HTML table based on the provided data. It creates a table header (<thead>) to display column headers and a table body (<tbody>) to render the data rows.

2. Header Row: The first row of the input data is considered the header row, and its content is used to create the column headers (table headings). This allows for flexible and automatic generation of headers without the need for hardcoding.

3. Data Rows: All subsequent rows in the input data are treated as data rows and are displayed within the table body. Each cell in these rows represents a data point, ensuring that the entire dataset is presented in a tabular format.

4. Conditional Rendering: The component handles cases where no data is provided gracefully. If the input data is empty, it displays a user-friendly message indicating that no data is available.

5. CSS Styling: The Table component can be easily styled using CSS. It applies a custom-table class to the HTML table, allowing developers to define custom styles for the table's appearance, such as borders, background colors, font styles, and more.

In summary, the Table component is a versatile and reusable React component that simplifies the rendering of tabular data in web applications. It automatically generates table headers, handles empty data scenarios, and provides flexibility in styling, making it a valuable tool for presenting data in a clean and organized manner within React-based projects.

## Installation

You can install `react-ts-data-grid` using npm or yarn:

`npm i react-ts-data-grid`
or
`yarn add react-ts-data-grid`

## Parameters
data (Array): An array of string arrays representing the data to be converted into CSV format.

fileName (String): The desired file name for the generated CSV file.


## Example
Here's an example of using react-ts-data-grid to create and trigger a CSV file download:
```tsx
import React from "react";
import { Table } from "react-ts-data-grid";

const Component: React.FC = () => {
  const data: string[][] = [
  ['Name', 'Email', 'Number'],
  ['Alice', 'alice@example.com', '123'],
  ['Bob', 'bob@example.com', '456'],
  ['Charlie', 'charlie@example.com', '789'],
  ['David', 'david@example.com', '101'],
  ['Eva', 'eva@example.com', '202'],
  ['Frank', 'frank@example.com', '303'],
  ['Grace', 'grace@example.com', '404'],
  ['Hank', 'hank@example.com', '505'],
  ['Ivy', 'ivy@example.com', '606'],
  ['Jack', 'jack@example.com', '707'],
];

  return <Table data={data}/>  
};

export default Component;

```
![Example of the react-ts-data-grid!](/src/assets/tableExample.png "Example of the react-ts-data-grid")

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Contributing
Contributions are welcome! If you have any bug fixes, improvements, or new features to propose, please open an issue or submit a pull request.

## Issues
If you encounter any issues or have questions or suggestions, please feel free to open an issue.

## Acknowledgments
This package was inspired by the need for a simple CSV generation utility.
Special thanks to the open-source community for their valuable contributions.

> Author
> Aqeel Sahi
