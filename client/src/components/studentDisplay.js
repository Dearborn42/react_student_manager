import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Student({student}){
    return (
        <Card style={{ width: '8.5rem' }}>
        <Card.Img variant="top" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIUAhQMBIgACEQEDEQH/xAAbAAEBAQEBAQEBAAAAAAAAAAAABgUDBAcCAf/EADYQAAICAQAGBwcCBwEAAAAAAAABAgMEBQYRITGxEjRBUWFzgSIyQlJxodEj4RQkYnKRksET/8QAGQEBAAMBAQAAAAAAAAAAAAAAAAIDBAEF/8QAIxEBAAIBAwQCAwAAAAAAAAAAAAECBAMRMRIhQVEyMxQiQv/aAAwDAQACEQMRAD8AuAAe680AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAebOzsfBr6eRNJvhFb2/QwsjWa2T/lqIRj32b39iddO1+IcmYhTAklrFnJ7WqZeDg/yaGHrJTY1HKqdTfxRe2P5RKdG8eHIvDdB+YTjOKlCSlFramuDP0VJAAAAAAAAAAAAAAeXSWbDAxZXS3y4Qj8zPUSmtOQ7M6NCfs1RW1eL38thPTp122ctO0MvIvtybpW3zcpvtOQB6URsoAABqaE0pLBtVdstuNN718j70WG3bvPnZZ6AyHkaMr6T2yrbrfpw+2wx5GnEftCyk+GiADMsAAAAAAAAAAAIvT6a0xkbe+PJFoTGtWLKOTXlJezNdCX1X7ci7Hna6F47MIAG9UAAAVOqif8Da+z/1ez/CJZ8C30NjPE0dVXNbJv2prxZnyZjp2TpHfd7QAYloAAAAAAAAAABxy8avLx50WrbCS9U+87ACF0hg3YFzruXsv3J7N0jy7T6DdVXdW67oRnB8VJbUY+Rq3i2Sbpssq/p3Nfc10yI/pXNPSWBRR1XSl7WW9nhD9zQw9CYeLJT6DtmuErN+z04E7ZFI47udEsrQOh52TjlZUXGuO+uDXvPvfhzKcAx3vN53lZEbAAIugAAAAAAAABzvurx6pW3TUIRW9sDoc7r6cePSvthWu+UkiZ0hrDfc3DD/AEYfN8T/AAY05Ssk52ScpPi5PazRTHtPeUJvtwr7tP4FfCc7P7I/k8stZqPgx7X9WkTILox6eUeuVItZ69u/Fn/uvwdYazYjf6lN0V6Mlgd/H0/R1ytKdNaPu4ZCg+6xdE98ZRnHpQkpRfantR88OuPk34s+lj2yrfhwf1XaV2xo8S7F/a/Bg6M1gja41ZqjXN7lYvdf17jeM1qWrO0pxMTwAAi6AAAAABH6wZssnNlUm1VTLopd77X/AMLAgczruR5subNGNWJtMyheeziADaqAAAAAAAACp1YzZX488e1tyq2dFv5X2ehLG5ql1u/y1zKciImiVJ7qgAGBcAAAAABA5vXcjzZc2XxA5vXcjzZc2acX5ShqOIANioAAAAAAAANzVLreR5a5mGbmqXW8jy1zKtf65SryqAAeeuAAAAAAgc3ruR5subP6DTi/KUNRwABsVAAAAAAAABuapdbyPLXM/oKtf65SrypwAeeuAAB//9k=" />
        <Card.Body>
            <Card.Title>{student.name}</Card.Title>
            <Card.Text>
                <p>Age: {student.age}</p>
                <p>Class: {student.course}</p>
            </Card.Text>
        </Card.Body>
        </Card>
    )
}