<br>
<h1 align=center>
<span> React Notification </span>
<img align="center" src="./public/favicon.png" alt="" width="50" height="50">
</h1>

**React Notification is a customizable notification component for React applications. It provides an easy way to add dynamic notifications with various options for customization and a rich features set, allowing you to enhance user experience in your projects.**

## Live Demo

You can access the live demo of this React Notification on Netlify:
<br>
Netlify: [React Notification Demo](https://ritoncharlox-react-notification.netlify.app/)

## Features

- Add notifications with various statuses such as success, failure, and warning.
- Customize notification appearance including text, status, background color, duration, and more.
- Support for custom icons to accompany notifications.
- Option to have fixed notifications that do not automatically clear.
- Close button rotation for enhanced interactivity.
- Easily integrate into existing React applications.

## Technologies Used

&emsp; ![React](https://img.shields.io/badge/react.js-%23563D7C.svg?style=for-the-badge&logo=react&logoColor=white)
<br>
&emsp; ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
<br>
&emsp; ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

## Usage

To use the React Notification component in your React application, follow these steps:

1. Download the `Notification` folder from the repository. The folder structure should be as follows:
    ```
    ├── node_modules
    ├── public
    ├── src
    │   ├── components
    │   │   ├── Navbar
    │   │   ├── Notification
    │   │   │   ├── Notification.css
    │   │   │   ├── Notification.js
    │   │   │   ├── NotificationContext.js
    │   │   │   └── notificationExample.js
    │   │   └── NotificationPage
    │   ├── App.js
    │   ├── index.js
    │   └── app.css
    ├── .gitignore
    ├── LICENSE
    ├── README.md
    ├── package.json
    └── package-lock.json
    ```
2. In your project, import `NotificationsProvider` from `NotificationContext.js` to manage notifications context:
    ```javascript
    import { NotificationsProvider } from './components/Notification/NotificationContext';
    ```
3. Import the Notification component from Notification.js to use it in your application:
    ```javascript
    import Notification from './components/Notification/Notification';
    ```
4. Wrap your application in `NotificationsProvider` to provide notification context. Also, include the `Notification` component anywhere inside the `App` component to display notifications:
    ```javascript
    import React from 'react';
    import { NotificationsProvider } from './components/Notification/NotificationContext';
    import Notification from './components/Notification/Notification';

    const App = () => {
    return (
        <NotificationsProvider>
        <div className="App">
            {/* Include the Notification component */}
            <Notification position="topCenter" />
            {/* Your other components */}
        </div>
        </NotificationsProvider>
    );
    };

    export default App;
    ```
5. Place the `Notification` component wherever you want notifications to appear in your application. You can specify the position using the `position` prop. By default, notifications appear at the top center:

    ```javascript
    <Notification position="topCenter" />
    ```
    Available position options:
    ```topCenter
    bottomCenter
    topLeft
    topRight
    bottomLeft
    bottomRight
    ```

6. Please replace `'./components/Notification/NotificationContext'` and `'./components/Notification/Notification'` with the actual relative paths to the `NotificationContext.js` and `Notification.js` files in your project. Additionally, ensure that the folder structure and file names match those mentioned in step 1.  

### Dependencies
- **uuid**: This library is used to generate unique identifiers for notifications.

    You can install it via npm:
    ```bash
    npm install uuid
    ```

## Sending Notifications

To send notifications using the React Notification component, follow these steps:

1. Import the `useNotifications` custom hook from `NotificationContext.js` to access the notification functionality:

    ```javascript
    import { useNotifications } from '../Notification/NotificationContext';
    ```
2. Inside the component, initialize the addNotification function using the useNotifications hook:

    ```javascript
    const { addNotification } = useNotifications();
    ```
3. Use the addNotification function to send notifications with desired configurations. The format for adding notifications is as follows:
    ```javascript
    addNotification(
        {
            title: "Title", // Default is null
            description: "Description", // Default is null
            text: "Text", // // Default is null
            status: "success" || "failed" || "warning", // Default is null
            background: "purple" || "#800080", // Can use any color name or hex code
            color: "white" || "#FFFFFF", // Can use any color name or hex code
            icon: "✅" || <FaCheckCircle />, // Can be a string representing a unicode character or a React component
            duration : '5s', // Default is 5s
            iconColor: "white" || "#FFFFFF", // Can use any color name or hex code
            textsColor: "white" || "#FFFFFF", // Can use any color name or hex code
            titleColor: "white" || "#FFFFFF", // Can use any color name or hex code
            textColor: "white" || "#FFFFFF", // Can use any color name or hex code
            descriptionColor: "white" || "#FFFFFF", // Can use any color name or hex code
            fixed: true, // If true, the notification remains fixed and does not automatically clear
            progressColor: "gray" || "#808080", // Can use any color name or hex code
            closeButtonRotate: true, // If true, the close button rotates on hover
        }
    );
    ```

4. Use the `addNotification` function from useNotifications to add notifications with desired configurations. Example usage:
    ```javascript
    import React from 'react';
    import { useNotifications } from './components/Notification/NotificationContext';

    const ExampleComponent = () => {
    const { addNotification } = useNotifications();

    const handleClick = () => {
        addNotification({
        title: "Title",
        description: "Description",
        text: "Text",
        status: "success",
        background: "purple",
        color: "white",
        icon: "✅",
        duration: '5s',
        iconColor: "white",
        titleColor: "white",
        textColor: "white",
        descriptionColor: "white",
        fixed: true,
        progressColor: "gray",
        closeButtonRotate: true,
        });
    };

    return (
        <button onClick={handleClick}>Add Notification</button>
        );
    };

    export default ExampleComponent;
    ```

Please make sure to replace `'../Notification/NotificationContext'` with the actual relative path to the `NotificationContext.js` file in your project. Additionally, ensure that the `useNotifications` hook and `addNotification` function are correctly imported and used within your components.


## Contributing

Contributions are welcome! If you'd like to contribute to this project, feel free to fork this repository, make your changes, and submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.