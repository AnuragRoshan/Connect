// ProfileCard.js
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";

const ProfileCard = ({ name, role, image, socialLinks }) => {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-xl bg-white text-black"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
      <Card className="relative overflow-hidden h-full">
        <CardContent className="p-6">
          <div className="relative z-10 flex flex-col items-center">
            <motion.div
              className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-black"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.h3
              className="text-2xl font-bold mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {name}
            </motion.h3>
            <motion.p
              className="text-gray-600 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {role}
            </motion.p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  className="text-gray-600 hover:text-black transition-colors"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </CardContent>
        <motion.div
          className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 0.1 }}
        />
      </Card>
    </motion.div>
  );
};

export default ProfileCard;
