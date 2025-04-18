import express from 'express';
import dotenv from 'dotenv';
import cors from "cors";
import { graphqlHTTP } from 'express-graphql';
import schema from './graphql/countries/schema.js';

import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
import mailRoutes from './routes/mailRoutes.js';
dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true // Enables the GraphiQL UI
}));

// Routes
app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use("/api/mail", mailRoutes);

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
