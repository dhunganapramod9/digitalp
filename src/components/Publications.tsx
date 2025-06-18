import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BookOpen, ExternalLink } from 'lucide-react';

interface PublicationItem {
  title: string;
  authors: string;
  journal: string;
  date: string;
  description: string;
  link?: string;
  doi?: string;
}

const publications: PublicationItem[] = [
  {
    title: "TriGuard: Testing Model Safety with Attribution Entropy, Verification, and Drift",
    authors: "Dipesh Tharu Mahato, Pramod Dhungana, Rohan Poudel",
    journal: "arXiv preprint",
    date: "June 2025",
    description: "Co-authored TriGuard, a unified safety evaluation framework combining formal robustness verification, attribution entropy, and explanation drift to assess deep learning model reliability. Introduced Attribution Drift Score (ADS) to quantify interpretability stability under perturbations—revealing weaknesses missed by accuracy and adversarial metrics alone. Benchmarked 5 architectures across 3 datasets (MNIST, FashionMNIST, CIFAR-10), uncovering critical gaps between model accuracy, explanation reliability, and formal robustness. Validated entropy-regularized training, reducing attribution drift by over 85% on MNIST without sacrificing accuracy, enhancing model interpretability in safety-critical settings.",
    link: "https://arxiv.org/abs/2506.14217",
    doi: "10.48550/arXiv.2506.14217"
  }
];

const PublicationCard = ({ item, index }: { item: PublicationItem; index: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="bg-background/80 backdrop-blur-sm p-6 rounded-lg border border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
          <BookOpen className="w-6 h-6 text-accent" />
        </div>
        
        <div className="flex-1">
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-xl font-bold text-white hover:text-accent transition-colors">
              {item.title}
            </h3>
            {item.link && (
              <a 
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-accent hover:text-white transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
          
          <p className="text-accent font-medium mb-2">{item.authors}</p>
          <p className="text-gray-400 text-sm mb-2">{item.journal}</p>
          <p className="text-gray-300 text-sm mb-3">{item.date}</p>
          
          <p className="text-gray-300 leading-relaxed">
            {item.description}
          </p>
          
          {item.doi && (
            <p className="text-sm text-accent mt-3">
              DOI: <span className="text-gray-400">{item.doi}</span>
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Publications = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1
  });

  return (
    <section id="publications" className="py-20 bg-background/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-accent">
            Publications & Research
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Academic contributions and technical research in AI and software engineering
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-1">
          {publications.map((publication, index) => (
            <PublicationCard key={index} item={publication} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications; 