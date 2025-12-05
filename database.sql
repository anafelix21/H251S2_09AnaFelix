CREATE DATABASE hackaton;

USE hackaton;

CREATE TABLE equipos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    codigo VARCHAR(100),
    tipo VARCHAR(50),
    marcas VARCHAR(100),
    modelo VARCHAR(100),
    so VARCHAR(50),
    almacenamiento INT,
    ram INT,
    estado VARCHAR(50),
    mantenimiento DATE,
    fecha_registro DATE
);

SELECT * FROM equipos;

INSERT INTO equipos (
    codigo, tipo, marcas, modelo, so, almacenamiento, ram, estado, mantenimiento, fecha_registro
) VALUES
('EQ-001', 'Laptop', 'HP', 'Pavilion 14', 'Windows 10', 512, 8, 'Operativo', '2025-01-05', '2024-12-01'),
('EQ-002', 'PC', 'Dell', 'OptiPlex 3080', 'Windows 11', 1024, 16, 'Operativo', '2025-01-10', '2024-12-03'),
('EQ-003', 'Laptop', 'Lenovo', 'ThinkPad E15', 'Windows 11', 256, 8, 'En mantenimiento', '2025-01-12', '2024-12-05'),
('EQ-004', 'Impresora', 'Epson', 'L3150', 'N/A', 0, 0, 'Operativo', '2025-01-08', '2024-12-06'),
('EQ-005', 'PC', 'Acer', 'Aspire TC', 'Linux Ubuntu', 512, 8, 'Operativo', '2025-01-09', '2024-12-06'),
('EQ-006', 'Laptop', 'Asus', 'VivoBook 15', 'Windows 10', 1024, 16, 'Inactivo', '2025-01-15', '2024-12-07'),
('EQ-007', 'Monitor', 'LG', 'UltraGear 24', 'N/A', 0, 0, 'Operativo', '2025-01-18', '2024-12-08'),
('EQ-008', 'PC', 'HP', 'ProDesk 400', 'Windows 11', 512, 8, 'Operativo', '2025-01-13', '2024-12-09'),
('EQ-009', 'Laptop', 'Apple', 'MacBook Air M1', 'macOS', 256, 8, 'Operativo', '2025-01-20', '2024-12-10'),
('EQ-010', 'Servidor', 'Dell', 'PowerEdge T40', 'Ubuntu Server', 2048, 32, 'Operativo', '2025-01-25', '2024-12-11');

