INSERT INTO products (name, price, nsx, hsd, quantity, unit)
VALUES
  ('Gạo thơm ST25', 18000, '2025-01-15', '2026-01-15', 50, 'KG'),
  ('Đường tinh luyện Biên Hòa', 15000, '2025-01-10', '2027-01-10', 80, 'KG'),
  ('Muối i-ốt Hạt Mịn', 7000, '2025-02-01', '2028-02-01', 100, 'KG'),
  ('Bột mì số 11 Meizan', 12000, '2025-03-01', '2026-03-01', 60, 'KG'),
  ('Ngũ cốc dinh dưỡng Nestlé', 25000, '2025-03-10', '2026-03-10', 40, 'KG'),
  ('Bột năng Tài Ký', 9000, '2025-02-20', '2026-02-20', 70, 'KG'),
  ('Cà phê hòa tan G7', 35000, '2025-01-05', '2027-01-05', 35, 'KG'),
  ('Bột cacao NesCafé', 42000, '2025-01-22', '2027-01-22', 25, 'KG'),
  ('Bột sữa Vinamilk', 28000, '2025-02-01', '2026-12-31', 55, 'KG'),
  ('Đậu xanh hạt', 16000, '2025-01-01', '2026-06-01', 80, 'KG'),
  ('Đậu đỏ hạt', 17000, '2025-01-10', '2026-07-10', 60, 'KG'),
  ('Hạt nêm Ajinomoto', 30000, '2025-03-01', '2026-09-01', 45, 'KG'),
  ('Bột canh Hải Châu', 8000, '2025-02-15', '2027-02-15', 100, 'KG'),
  ('Mì chính Vedan', 24000, '2025-03-05', '2027-03-05', 90, 'KG'),
  ('Gạo nếp Cái Hoa Vàng', 22000, '2025-01-20', '2026-01-20', 65, 'KG'),
  ('Bột bắp Mỹ', 13000, '2025-02-28', '2026-08-28', 70, 'KG'),
  ('Bột gạo Tài Ký', 11000, '2025-01-12', '2026-05-12', 75, 'KG'),
  ('Muối hột Biển Đông', 6000, '2025-01-03', '2028-01-03', 150, 'KG'),
  ('Đường nâu Việt Nam', 18000, '2025-03-08', '2027-03-08', 55, 'KG'),
  ('Ngũ cốc nguyên hạt Calbee', 45000, '2025-02-10', '2026-02-10', 30, 'KG');
  ('Sữa tươi tiệt trùng Vinamilk', 26000, '2023-03-15', '2024-03-15', 30, 'KG'),
  ('Nước tương Maggi', 18000, '2023-06-20', '2024-06-20', 50, 'KG'),
  ('Dầu ăn Tường An', 45000, '2023-01-10', '2024-01-10', 25, 'KG'),
  ('Bột mì Hoa Ngọc Lan', 14000, '2023-05-01', '2024-05-01', 60, 'KG'),
  ('Gạo nếp cái', 20000, '2022-12-10', '2023-12-10', 40, 'KG'),
  ('Bột ngũ cốc Dinh Dưỡng', 32000, '2023-02-01', '2024-02-01', 35, 'KG'),
  ('Muối hồng Himalaya', 25000, '2022-10-15', '2023-10-15', 45, 'KG'),
  ('Đường vàng Biên Hòa', 17000, '2023-04-12', '2024-04-12', 70, 'KG'),
  ('Cà phê rang xay Trung Nguyên', 48000, '2023-07-05', '2024-07-05', 20, 'KG'),
  ('Ngũ cốc ăn sáng Milo', 35000, '2023-08-25', '2024-08-25', 55, 'KG');


CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  username VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  role VARCHAR(50) NOT NULL DEFAULT "staff"
)

INSERT INTO users (email, username, password)
VALUES
