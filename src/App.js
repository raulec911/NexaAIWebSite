import React, { useState } from 'react';
import './App.css';

export default function NexaAIWebsite() {
    const [selectedService, setSelectedService] = useState(null);

    const services = {
        "Data Nexus Solutions": {
            description: "Ofrece análisis de datos avanzados para optimizar procesos y mejorar decisiones. Con tecnologías de inteligencia artificial y machine learning, transformamos datos en conocimientos prácticos para tu negocio.",
            features: [
                "Análisis Predictivo",
                "Modelos de Machine Learning",
                "Análisis de Series Temporales",
                "Inteligencia de Negocios (BI)",
                "Optimización de Procesos"
            ]
        },
        "Automated Insights": {
            description: "Automatización inteligente para informes y análisis precisos, reduciendo el tiempo de procesamiento de datos y mejorando la precisión en la toma de decisiones.",
            features: [
                "Automatización de Informes",
                "Análisis de Datos en Tiempo Real",
                "Inteligencia Artificial para Predicciones",
                "Optimización de Flujos de Trabajo",
                "Integración con Sistemas Existentes"
            ]
        },
        "SmartBot Solutions": {
            description: "Desarrollo de chatbots avanzados para atención al cliente, soporte técnico y ventas automatizadas, mejorando la experiencia del usuario y reduciendo costos operativos.",
            features: [
                "Chatbots Personalizados",
                "Análisis de Sentimientos",
                "Automatización de Respuestas",
                "Integración con CRM",
                "Soporte Multicanal"
            ]
        },
        "DeepVision AI": {
            description: "Soluciones de visión por computadora para control de calidad y análisis de imágenes en aplicaciones industriales y comerciales.",
            features: [
                "Detección de Defectos",
                "Reconocimiento Facial",
                "Análisis de Imágenes Médicas",
                "Control de Calidad Automatizado",
                "Optimización de Procesos de Manufactura"
            ]
        },
        "FinWise AI": {
            description: "Análisis financiero avanzado para predicción de mercado y gestión de riesgos, ayudando a empresas a tomar decisiones financieras inteligentes.",
            features: [
                "Análisis de Riesgos",
                "Predicción de Movimientos de Mercado",
                "Optimización de Portafolios",
                "Modelos de Credit Scoring",
                "Inteligencia Financiera"
            ]
        },
        "AutoScale Analytics": {
            description: "Optimización de modelos de machine learning para escalabilidad eficiente y reducción de costos operativos.",
            features: [
                "Optimización de Modelos",
                "Análisis de Rendimiento",
                "Escalabilidad Horizontal",
                "Automatización de Modelos",
                "Integración Continua"
            ]
        },
        "LangFlow Tech": {
            description: "Procesamiento de lenguaje natural para análisis de texto y traducción automática, mejorando la comunicación y comprensión en múltiples idiomas.",
            features: [
                "Análisis de Texto",
                "Traducción Automática",
                "Análisis de Sentimientos",
                "Generación de Resúmenes",
                "Detección de Lenguaje"
            ]
        }
    };

    const handleShowDetails = (service) => {
        setSelectedService(service);
    };

    const handleGoBack = () => {
        setSelectedService(null);
    };

    return (
        <div className="app-container">
            <header className="header">
                <img src="logo.png" alt="NexaAI Logo" className="logo" />
                <p className="subtitle">Impulsando decisiones inteligentes</p>
                <button className="main-button">Descubre Nuestros Servicios</button>
            </header>
            {selectedService ? (
                <div className="details-container">
                    <h2>{selectedService}</h2>
                    <p>{services[selectedService].description}</p>
                    <ul>
                        {services[selectedService].features.map((feature, index) => (
                            <li key={index}>✔️ {feature}</li>
                        ))}
                    </ul>
                    <button className="back-button" onClick={handleGoBack}>Volver</button>
                </div>
            ) : (
                <main className="cards-container">
                    {Object.keys(services).map((service) => (
                        <div className="card" key={service}>
                            <h2>{service}</h2>
                            <p>{services[service].description.split('.')[0]}.</p>
                            <button className="card-button" onClick={() => handleShowDetails(service)}>Saber Más</button>
                        </div>
                    ))}
                </main>
            )}
            <footer className="footer">
                <p>© 2025 NexaAI - Todos los derechos reservados.</p>
            </footer>
        </div>
    );
}
