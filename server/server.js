import express from 'express';
import dotenv from 'dotenv';

import { graphqlHTTP } from 'express-graphql';
import schema from './graphql/schema.js';

import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';

dotenv.config();
const app = express();

// Middleware
app.use(express.json());

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true // Enables the GraphiQL UI
}));
// Routes
app.use('/auth', authRoutes);
app.use('/users', userRoutes);

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
