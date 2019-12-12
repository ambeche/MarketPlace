-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Dec 11, 2019 at 02:08 AM
-- Server version: 10.4.10-MariaDB
-- PHP Version: 7.1.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `newMarketPlace`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `name` varchar(30) NOT NULL,
  `product_id` int(11) NOT NULL,
  `price` int(10) NOT NULL,
  `description` text NOT NULL,
  `specification` text NOT NULL,
  `category` text NOT NULL,
  `metadata` text NOT NULL,
  `file_name` text NOT NULL,
  `owner` varchar(17) NOT NULL,
  `buyer` int(11) DEFAULT NULL,
  `order_date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`name`, `product_id`, `price`, `description`, `specification`, `category`, `metadata`, `file_name`, `owner`, `buyer`, `order_date`) VALUES
('Ancient chair', 30, 194, 'An Egypt chairs', 'like new', 'furniture', 'no exif data found', 'ancient_chair.jpg', 'vynguyen', NULL, NULL),
('Laptop', 31, 590, '128GB, core I7', 'Bought 2 weeks ago', 'Computer', 'no exif data found', 'thinkpad laptop.jpeg', 'vynguyen', NULL, NULL),
('IphoneX', 32, 500, '128GB,white', 'new', 'mobiles', 'no exif data found', 'iphonex.jpeg', 'vynguyen', NULL, NULL),
('Android Phone', 33, 200, 'A black, 16GB mobile phone', 'Having a smooth 90Hz display good camera', 'mobiles', 'no exif data found', 'android phone.jpeg', 'tete', NULL, NULL),
('Car Seat Cover', 34, 20, 'For all Car & Van Models', 'Unused', 'Auto Accessories', 'no exif data found', 'car_SeatCover.jpg', 'beto', NULL, NULL),
('Car Wheel Cover', 35, 50, '15 inch', 'Made of smooth leather', 'Auto Accessories', 'no exif data found', 'car_wheelCover.jpg', 'che', NULL, NULL),
('Laptop Dell', 36, 980, 'A silver laptop with 15\" screen', 'RAM 8GB', 'Computer', 'no exif data found', 'dell_laptop.jpeg', 'che', NULL, NULL),
('IMAC', 37, 1000, 'iMac 21.5 ”MMQA2', 'Ultra-slim design, beautiful Full HD IPS display,', 'Computer', 'no exif data found', 'imac.jpeg', 'che', NULL, NULL),
('Iphone5', 38, 200, 'iPhone 5 16GB Black', 'Still works well!', 'mobiles', 'no exif data found', 'iphone5.jpeg', 'che', NULL, NULL),
('Macbook Pro 2018 ', 39, 1200, 'Screen 13\", touch bar', 'RAM 16G', 'Computer', 'no exif data found', 'macbookpro2018.jpeg', 'vynguyen', NULL, NULL),
('Massage Chair', 40, 800, 'Full body massage ', 'Built-in HeatTherapy Air Massage System', 'fitness', 'no exif data found', 'massage_chair.jpg', 'tete', NULL, NULL),
('Eclipse Movie Single Disk', 41, 12, '\"The Twilight Saga: Eclipse\" is an audio-visual treat for viewers', 'Edition Sealed', 'Movies and Music', 'no exif data found', 'film_eclipse.jpg', 'vynguyen', NULL, NULL),
('Phone Holder For Car', 42, 12, 'AUKEY Car Phone Mount Air Vent Cell Phone Holder for Car', 'Compatible with iPhone 11/11 Pro/Xs/XS Max ', 'Auto Accessories', 'no exif data found', 'phoneHolderforcar.jpeg', 'tete', NULL, NULL),
('Indian Polity 5th Edition', 43, 30, 'Separate sections on non-constitutional bodies of India', 'a consistent bestseller for many years', 'Books', 'no exif data found', 'book1.jpg', 'vynguyen', NULL, NULL),
('The Body: A Guide....', 44, 40, 'Full of extraordinary facts and astonishing stories', '\'A directory of wonders.\' - The Guardian', 'Books', 'no exif data found', 'the-body-bill-bryson-9780857522405.jpg', 'vynguyen', NULL, NULL),
('Real Simple', 45, 5, 'Print Magazine', ' Real Simple magazine offers tips on spending your money in smarter ways', 'Magazines', 'no exif data found', 'ma1.jpg', 'tete', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `full_name` text DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  `nickname` varchar(17) NOT NULL,
  `email` text NOT NULL,
  `password` varchar(17) NOT NULL,
  `address` varchar(40) DEFAULT NULL,
  `phone_number` varchar(15) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`full_name`, `user_id`, `nickname`, `email`, `password`, `address`, `phone_number`) VALUES
('John Doe', 1, 'beto', 'test@tt.tt', '123', 'leiritie 3', '123445'),
('Che Ambe Tamanji', 2, 'che', 'brainyarckk@gmail.com', 'sfssffsfsfsf', 'leiri 2', '0465475949'),
('Ambe Tamanji Che', 3, 'tete', 'brainyarckk@gmail.com', '3423', '', '0465475949'),
('vy nguyen', 4, 'vynguyen', 'vynguyen9699@gmail.com', '123123', 'abcd', '465709301');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`product_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
